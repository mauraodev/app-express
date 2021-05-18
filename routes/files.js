var express = require("express");
var router = express.Router();
var axios = require("axios");
var FormData = require("form-data");
var fs = require("fs");
var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');

var s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'mnweb-bucket',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: function (req, file, cb) {
      console.log(file)
      cb(null, Date.now().toString())
    }
  }),
})

/* GET users listing. */
router.get("/", function (req, res, next) {
  // File
  var file = fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
  
  const formData = new FormData();
  formData.append("name", "Mauro");
  formData.append("file", file)

  axios
    .post(
      "https://webhook.site/86df4ee8-1c1c-45ba-ac8d-748bfcf3e35b",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      }
    )
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      // console.log(error);
    });

  res.send("Success");
});

router.post('/', upload.array('photos', 3), function (req, res, next) {
  res.send(true);
});


module.exports = router;
