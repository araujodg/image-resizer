# IMAGE RESIZER

## Description

This is a simple script to resize an image with NodeJS. It will create a directory to the outputs (resized-images), clone the image, resize it with the specified width, so it can keep the proportions, and place it in the directory

## How to use

1. Clone the repository
2. Install the dependencies with `npm install`
3. Run the script with `node resize <imagePath> <width1>, <width2>, ...`
4. The resized images will be in the `resized-images` directory

## Example

`node resize ./images/image.jpg 200, 500, 1000`

## Dependencies

- [sharp](https://www.npmjs.com/package/sharp)

Have fun! :smile: