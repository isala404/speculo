from google_images_download import google_images_download
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("query")
parser.add_argument("limit", type=int)
args = parser.parse_args()


def download_images(query, limit):
    response = google_images_download.googleimagesdownload()
    arguments = {"keywords": query,
                 "limit": limit}
    try:
        response.download(arguments)


    except FileNotFoundError:
        arguments = {"keywords": query,
                     "limit": limit}

        try:
            response.download(arguments)
        except:
            pass




def main(query, limit):
    download_images(query, limit)
    print("Images Printed")

if __name__ == '__main__':
    main(args.query, args.limit)