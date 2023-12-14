const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const imageFilePath = process.argv[2];
const sizes = []
process.argv.forEach((argv, i) => {
  i > 2 && sizes.push(Number(argv))
})
const imageDirPath = path.dirname(imageFilePath);

const [imageFileName, imageFileExtension] = path
  .basename(imageFilePath)
  .split(".");

const resizedImageDir = `${imageDirPath}/resized-images`;

if (!fs.existsSync(resizedImageDir)) {
  fs.mkdirSync(resizedImageDir);
}

sizes.forEach((size) => {
  sharp(imageFilePath)
    .clone()
    .resize(size)
    .jpeg({ mozjpeg: true })
    .toFile(`${resizedImageDir}/${imageFileName}-${size}.${imageFileExtension}`)
    .then((info) => {
      console.log(info);
    })
    .catch((err) => console.log(err));
});
