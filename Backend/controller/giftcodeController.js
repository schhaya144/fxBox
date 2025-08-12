const giftcodemodel = require('../models/giftcode');

// Generate Unique Giftcode
const generateGiftcodeId = () => {
  const firstCharacter = Math.floor(Math.random() * 10).toString();
  const alphanumericPart = Math.random().toString(36).substr(2, 8).toUpperCase();
  return firstCharacter + alphanumericPart;
};

// Create a Giftcode
const createGiftcode = async (req, res) => {
  try {
    const { giftcodeAmount, noOfUsers } = req.body;
    if (!giftcodeAmount || !noOfUsers) {
      return res.status(400).json({ message: 'Both giftcodeAmount and noOfUsers are required' });
    }

    const newGiftcode = new giftcodemodel({
      giftcodeAmount,
      noOfUsers,
      giftcodeId: generateGiftcodeId(),
      distributingAmount: giftcodeAmount / noOfUsers,
    });

    const savedGiftcode = await newGiftcode.save();
    res.status(201).json({ message: 'Giftcode created successfully', data: savedGiftcode });
  } catch (error) {
    console.error('Error creating giftcode:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// get the details
const getGiftcode = async (req, res) => {
  try {
    const giftData = await giftcodemodel.find();
    res.status(200).json(giftData);
  } catch (error) {
    console.error('Error fetching gift codes:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// redeem gift code 
// Redeem Giftcode
const redeemGiftCode = async (req, res) => {
  const { giftcodeId } = req.body;
  const u_id = req.u_id; // Assume middleware sets req.u_id

  if (!giftcodeId || !u_id) {
    return res.status(400).json({ message: 'Giftcode ID and User ID are required' });
  }

  try {
    const giftcode = await giftcodemodel.findOne({ giftcodeId });
    if (!giftcode) {
      return res.status(404).json({ message: 'Giftcode not found' });
    }

    if (giftcode.expiryDate && new Date() > new Date(giftcode.expiryDate)) {
      return res.status(400).json({ message: 'Giftcode has expired' });
    }

    if (giftcode.redeemedBy.includes(u_id)) {
      return res.status(400).json({ message: 'You have already redeemed this giftcode' });
    }

    if (giftcode.redeemedUsers >= giftcode.noOfUsers) {
      return res.status(400).json({ message: 'Giftcode fully redeemed' });
    }

    giftcode.redeemedBy.push(u_id);
    giftcode.redeemedUsers += 1;

    if (giftcode.redeemedUsers === giftcode.noOfUsers) {
      giftcode.giftcodeStatus = 'redeem';
    }

    await giftcode.save();

    res.status(200).json({
      message: 'Giftcode redeemed successfully',
      data: { distributingAmount: giftcode.distributingAmount }, // Return distributingAmount
    });
  } catch (error) {
    console.error('Error redeeming giftcode:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};




const updateGiftcode = async (req, res) => {
  try {
    const { id } = req.params;
    const { giftcodeAmount, noOfUsers } = req.body;

    const updatedGiftcode = await giftcodemodel.findByIdAndUpdate(
      id,
      { giftcodeAmount, noOfUsers },
      { new: true }
    );

    if (!updatedGiftcode) {
      return res.status(404).json({ message: "Giftcode not found" });
    }

    res.status(200).json({
      message: "Giftcode updated successfully",
      data: updatedGiftcode,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Delete Giftcode
const deleteGiftcode = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("first", id)
    const deletedGiftcode = await giftcodemodel.findByIdAndDelete(id);

    if (!deletedGiftcode) {
      return res.status(404).json({ message: "Giftcode not found" });
    }

    res.status(200).json({ message: "Giftcode deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};




// GET controller to fetch distributingAmount of a specific giftcode
const getDistributingAmount = async (req, res) => {
  try {
    const { id: giftcodeId } = req.params;
    const giftcode = await giftcodemodel.findOne({ giftcodeId });

    if (!giftcode) {
      return res.status(404).json({ message: 'Giftcode not found' });
    }

    res.status(200).json({
      giftcodeId: giftcode.giftcodeId,
      distributingAmount: giftcodeAmount / noOfUsers,
    });
  } catch (error) {
    console.error('Error fetching distributing amount:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};








module.exports = { createGiftcode, getGiftcode, updateGiftcode,  deleteGiftcode, redeemGiftCode, getDistributingAmount};
