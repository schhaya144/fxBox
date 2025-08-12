const BankDetails = require('../models/BankDetails'); // BankDetails schema
const AllUser = require('../models/users'); // Assuming AllUser schema exists for fetching u_id


const addBankDetails = async (req, res) => {
  try {
    if (!req.session || !req.session.user || !req.session.user.u_id) {
      return res.status(401).json({ message: 'Unauthorized, please log in first.' });
    }
    const { bank, recipientName, accountNumber, phoneNumber, ifscCode } = req.body;
    const u_id = req.session.user.u_id;

    // Check if all fields are provided
    if (!bank || !recipientName || !accountNumber || !phoneNumber || !ifscCode) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const user = await AllUser.findOne({ u_id });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if the user already has bank details
    const existingBankDetails = await BankDetails.findOne({ u_id });
    if (existingBankDetails) {
      // If the bank details exist, allow only update
      existingBankDetails.bank = bank;
      existingBankDetails.recipientName = recipientName;
      existingBankDetails.accountNumber = accountNumber;
      existingBankDetails.phoneNumber = phoneNumber;
      existingBankDetails.ifscCode = ifscCode;

      await existingBankDetails.save();
      return res.status(200).json({ message: 'Bank details updated successfully.' });
    }

    // If no existing bank details, create new bank details
    const newBankDetails = new BankDetails({
      u_id: u_id,
      bank,
      recipientName,
      accountNumber,
      phoneNumber,
      ifscCode,
    });

    await newBankDetails.save();
    return res.status(201).json({ message: 'Bank details added successfully.' });
  } catch (error) {
    console.error('Error adding/updating bank details:', error);
    return res.status(500).json({ message: 'Internal server error.', error: error.message });
  }
};


// get controller 
const getBankDetailsController =async(req, res)=>{
  try{
    const bankDetails=await BankDetails.find();
    res.status(200).json({data:bankDetails})

  }catch(error){
    res.status(500).json({message:error.message})
  }
}




// current users bank details 
const getCurrentUserBankDetails = async (req, res) => {
  try {
    const userId = req.u_id;
    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized: User ID not found',
        error: true,
        success: false,
      });
    }

    const bankData = await BankDetails.find({ u_id: userId });
    console.log('rechbankDataargeData', bankData);
    if (!bankData || bankData.length === 0) {
      return res.status(404).json({
        message: 'No Bank details data found for the user',
        data: [],
        error: false,
        success: true,
      });
    }
    res.status(200).json({
      message: 'Bank details data retrieved successfully',
      data: bankData,
      error: false,
      success: true,
    });
  } catch (error) {
    console.error(
      'Error fetching browse Bank details data:',
      error.message || error
    );
    res.status(500).json({
      message: 'Internal server error',
      error: true,
      success: false,
    });
  }
};

module.exports = { addBankDetails, getBankDetailsController,  getCurrentUserBankDetails};
