const imageModel = require('../models/image.model');
const { rsErrorOperation, rsSuccess } = require('../helpers/respone')
module.exports.insertFile = async (req, res) => {
    try {
    //   const data = req.jwtDecode;
      const file = req.file;
      const path = file.path.slice(6);
      var infoImage = {
        account: 'Uyen',
        title: req.body.title,
        dateOfMemory: req.body.dateOfMemory,
        memory: req.body.memory,
        link_folder: path
      }
      var image = imageModel.insertImage(infoImage);
      res.json({Message: "Success"});
    } catch (err) {
      console.log(err);
      return res.json(rsErrorOperation(err.message));
    }
}

module.exports.getListFile = async(req, res) => {
  try {
    const listFile = await imageModel.getListImage();
    return res.json(rsSuccess(listFile));
  } catch (error) {
      return res.json(rsErrorOperation(error.message));
  }
};

module.exports.updateImage = async(req, res) => {
  try {
    const image = await imageModel.updateImage(req.body);
    return res.json(rsSuccess(null));
  } catch (error) {
    return res.json(rsErrorOperation(error.message));
  }
}
