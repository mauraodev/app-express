import express from "express"
import FormData from "form-data"
import fs from "fs"
import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'

const router = express.Router()

const s3 = new aws.S3({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, region: process.env.AWS_REGION })

const upload = multer({
  storage: multerS3(
    {
      s3: s3,
      bucket: 'mnweb-bucket',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: "public-read",
      key: function (req, file, cb) {
        console.log(file)
        cb(null, Date.now().toString())
      }
    }
  )
})

/* GET users listing. */
router.get("/", function (req, res,) { // File
  const file = fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    if (err)
      return console.log(err);

    console.log('Hello World > helloworld.txt');
  });

  const formData = new FormData();
  formData.append("name", "Mauro");
  formData.append("file", file)

  res.send("Success");
});

router.post('/', upload.array('photos', 3), function (req, res, next) {
  res.send(true);
});


export default router;
