const File = require("../models/file");

const uploadImage = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    response.status(200).json({ path: `http://localhost:5000/file/${file._id}` });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};

const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);
    file.downloadContent++;
    await file.save();

    response.download(file.path, file.name);
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ error: error.message });
  }
};

module.exports = { uploadImage, downloadImage };
