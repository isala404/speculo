import os
import requests
import sys

print("IMAGE SCRAPPER")

# creates the folders required to store the images
try:
    os.makedirs('faces/dev')
    os.makedirs('faces/eval')
except Exception:
    pass

# gets which type the user wants
try:
    data_type = sys.argv[1].lower()
except Exception:
    print("Argument required. Valid arguments : dev, eval")
    raise SystemExit(0)

if data_type not in ["dev", "eval"]:
    print("Invalid argument. Valid arguments : dev, eval")
    raise SystemExit(0)

print("Gathering face data for " + sys.argv[1] + "...")

path = os.getcwd() + '/faces/' + data_type

# takes the file and converts it to a list by separating each line by '\n'
data = [line.rstrip('\n') for line in open(data_type + '_urls.txt')]

# removing the unwanted first two lines
data.pop(0)
data.pop(0)

failure = {}
success = {}

for line in data:
    # parsing the data
    info = line.split('\t')
    name = info[0].lower().replace(" ", "_")
    infoId = info[1]
    url = info[2]
    coordinates = info[3]

    if name not in failure.keys():
        failure[name] = 0

    if name not in success.keys():
        success[name] = 0

    # in case the response takes a long time
    try:
        response = requests.get(url, timeout=5)
    except Exception:
        print(infoId, name, "-----", "Failed to fetch!")
        failure[name] = failure[name] + 1
        continue

    if not response.ok:
        failure[name] = failure[name] + 1
        print(infoId, name, "-----", "Failed to fetch!")
        continue

    handle = open(path + '/' + infoId + "-" + name + "-" + coordinates + ".jpg", 'wb')

    for block in response.iter_content(1024):
        if not block:
            break

        handle.write(block)

    print(infoId, name, "-----", "Fetched successfully!")
    success[name] = success[name] + 1


# printing the rate of success and failure of the download for each celebrity

print("\nSuccess Rate")
for key, value in success.items():
    print(key, "-", value)

print("\nFailure Rate")
for key, value in failure.items():
    print(key, "-", value)
