var imageSchema = require('./image.schema');

const insertImage = async(body) => {
    try {
        var image = await imageSchema.create(body);
        return image;
    } catch (error) {
        throw error;
    }
}

const getListImage = async(body) => {
    try {
        const listImage = await imageSchema.find();
        return listImage;
    } catch (error) {
        throw error;
    }
}

const updateImage = async(body) => {
    try {
        const updateImage = await imageSchema.findOneAndUpdate({
            _id: body._id
        }, body);
        return true;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    insertImage,
    getListImage,
    updateImage
};