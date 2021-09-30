const multer = require('multer');
const { rsErrorOperation } = require('../helpers/respone')


var storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    cb(null, './public' + '/images/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname)
  }
})

var maxSize = 1024 * 1024 * 1024 * 10;
var upload = multer({
  storage: storage,
  limits: { fileSize: maxSize }
}).single('myFile')

module.exports.uploadFile = async (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.json(rsErrorOperation(err.message))
    }
    else if (err) {
      return res.json(rsErrorOperation(err.message))
    }
    else
      return next()
  })
}
