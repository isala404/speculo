import os
import requests
import sys

BASE_URL = 'http://www.cs.columbia.edu/CAVE/databases/pubfig/explore/'


# creates the folders required to store the images
try:
    os.makedirs('faces/test')
    os.makedirs('faces/train')
except Exception:
    pass

# gets which type the user wants
try:
    data_type = sys.argv[1].lower()
except Exception:
    print("Argument required. Valid arguments : test, train")
    raise SystemExit(0)

if data_type not in ["test", "train"]:
    print("Invalid argument. Valid arguments : test, train")
    raise SystemExit(0)

print("Gathering face data for " + sys.argv[1] + "...")

data_type = sys.argv[1].lower()

path = os.getcwd() + '/faces/' + data_type

data = [line.rstrip('\n') for line in open(data_type + '_data.txt')]

# for every celebrity name in the list, fetch their image and save it
for name in data:

    celeb_name = name.replace(" ", "_")

    with open(path+'/'+celeb_name+".jpg", 'wb') as handle:
        response = requests.get(BASE_URL+celeb_name+".jpg", stream=True)

        if not response.ok:
            print(response)

        for block in response.iter_content(1024):
            if not block:
                break

            handle.write(block)

    print(name, "................... DONE")
