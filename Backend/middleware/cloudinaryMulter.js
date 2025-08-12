const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../config/cloudinary'); // ✅ correct import

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'qr_codes',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    public_id: (req, file) => file.fieldname+'-'+Date.now(),
  },
});

const upload = multer({ storage });

module.exports = { upload }; // ✅ Named export (must be object)
