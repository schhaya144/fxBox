const UPI = require("../models/qrUpload");
const fs = require("fs");
const path = require("path");

// Get all UPI entries
exports.getAllUPIs = async (req, res) => {
  try {
    const upis = await UPI.find();
    res.status(200).json(upis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update UPI entry
exports.updateUPI = async (req, res) => {
  const { id } = req.params;

  try {
    const upi = await UPI.findById(id);
    if (!upi) {
      return res.status(404).json({ message: "UPI not found" });
    }

    const updatedData = {
      title: req.body.title,
      upi_id: req.body.upi_id,
      notes: req.body.notes,
      status: req.body.status === "true",
    };

    // If a new QR image is uploaded
    if (req.file) {
      // Delete old image if it exists
      if (upi.qr_image) {
        const oldImagePath = path.resolve(upi.qr_image.replace(/\\/g, "/"));
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // Save new image path (normalize to forward slashes)
      updatedData.qr_image = req.file.path.replace(/\\/g, "/");
    }

    const updatedUPI = await UPI.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json(updatedUPI);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get random UPI entry
exports.getRandomUPI = async (req, res) => {
  try {
    const randomUPI = await UPI.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(randomUPI[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
