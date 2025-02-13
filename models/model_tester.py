"""model_tester.py: Script to Calculate the accuracy of the entire system"""

__author__ = "Isala Piyarisi"
__version__ = "0.0.1"
__email__ = "code@isala.me"
__status__ = "Development"


import asyncio
import cv2
from facedetector.yolo.yolo import YOLO
from fingerprinter.speculo import Speculo
from facecomparator.comparator import ImageComparator
import os

SIZE = 256

MODEL_VERSION = 12

yolo = YOLO(draw=False, debug=False)

speculo = Speculo(model_path=f"fingerprinter/models/{MODEL_VERSION}/Model-v{MODEL_VERSION}.h5", visualize=False,
                  encoder_only=True)

FINGERPRINT_SIZE = speculo.input_shape

comparator = ImageComparator(threshold=550, shape=speculo.output_shape, fingerprints=[], labels=[])


# Simple function to phrase though the evaluation dataset and get fingerprints for every photo
def get_finger_print(path, debug=True):
    # read and resize the image
    im = cv2.imread(path)
    im = cv2.resize(im, (512, 512), interpolation=cv2.INTER_AREA)

    # get the face coordinates
    boxes = yolo.detect_image_fast(im)
    if len(boxes) == 0:
        if debug:
            print(path, "no face found, skipping .....")
        return None
    if len(boxes) >= 2:
        if debug:
            print(path, "found more than one face, skipping .....")
        return None

    # in this dataset only one image as one person and it's also enforced by the above if blocks
    top, left, bottom, right = boxes[0]
    # Crop out the face
    face = im[int(top):int(bottom), int(left):int(right)]

    # Convert to Black and white
    if FINGERPRINT_SIZE[2] == 1:
        try:
            face = cv2.cvtColor(face, cv2.COLOR_BGR2GRAY)
        except cv2.error:
            return None

    # resize the cropped face
    face = cv2.resize(
        face, FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)

    # return to fingerprint from the fingerprinter
    return speculo.predict(face)


print("Processing Target Faces ....")
for image in sorted(os.listdir("dataset_evaluate/Front")):
    img_path = os.path.join("dataset_evaluate/Front", image)
    face_encoding = get_finger_print(img_path)
    if face_encoding.any():
        # dataset contain a typo in the names that's why I am replacing a word in it
        comparator.add_new_face(face_encoding, image.replace("personne", "person")[:8])

# constants calculate accuracy
# Note: Precision and Recall can't be calculated here due to this not being classifier
total_samples = 0
correct_predictions = 0
unknown_predictions = 0

print("Start Predicting on the dataset .... ")
for person_dir in sorted(os.listdir("dataset_evaluate")):
    # this is dir contain only targets
    if person_dir == "Front" or person_dir.endswith("txt"):
        continue

    # go though every face sample from person dir
    for image in os.listdir(os.path.join("dataset_evaluate", person_dir)):
        # get the relative path
        img_path = os.path.join("dataset_evaluate", person_dir, image)

        # This just metadata file in the dataset we don't need
        if img_path.endswith("txt"):
            continue

        # crop out the face and get the finger print
        face_encoding = get_finger_print(img_path, debug=False)

        # check if there is actual fingerprint, there can be images where face detector didn't find any face
        if face_encoding is not None:
            # get the closed name from the facecomparator
            loop = asyncio.get_event_loop()
            predicted_name = loop.run_until_complete(comparator.get_best_match(face_encoding, save=False))

            # if name is unknown it means model couldn't find the accurate match
            if predicted_name == "unknown":
                print("Model could not find the proper name for", img_path, "| Prediction Name -", predicted_name)
                unknown_predictions += 1
                # give the correct results for the model so it can be better at future
                comparator.add_new_face(face_encoding, image[:8])
            else:
                total_samples += 1
                # First 8 chars of the image variable contains the real person name
                # if it matched with the predicted name, then model is correct
                if image[:8] == predicted_name:
                    correct_predictions += 1
                else:
                    print("Invalid Prediction for", img_path, "| Prediction Name -", predicted_name)
                    # give the correct results for the model so it can be better at future
                    comparator.add_new_face(face_encoding, image[:8])

            # DivideByZero mitigation
            if total_samples == 0:
                accuracy = 100
            else:
                accuracy = (correct_predictions / total_samples) * 100
            print("current_samples", total_samples, "correct_predictions", correct_predictions,
                  "unknown_predictions", unknown_predictions, "accuracy:", accuracy)

            # if this is execute from CI stop after 20 samples
            if os.getenv("CI") and total_samples > 20:
                break

    # if this is execute from CI only process first folder
    if os.getenv("CI"):
        break

print("total_samples:", total_samples)
print("correct_predictions:", correct_predictions)
print("unknown_predictions:", unknown_predictions)
print("accuracy:", (correct_predictions / total_samples) * 100)
