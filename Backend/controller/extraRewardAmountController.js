const mongoose = require('mongoose');
const Amountrewarded = require('../models/extraReward'); // Path to the model


// Controller to handle updating the extraamount
const updateExtraAmount = async (req, res) => {
    const { extraamount } = req.body;

    if (extraamount === undefined) {
        return res.status(400).json({ message: 'extraamount is required' });
    }

    try {
        // Update the extraamount value in the first document (or change the filter if needed)
        const updatedAmount = await Amountrewarded.findOneAndUpdate(
            {}, // Empty filter to update the first document (assuming one document)
            { $set: { extraamount } },
            { new: true } // Return the updated document
        );

        if (!updatedAmount) {
            return res.status(404).json({ message: 'No document found to update' });
        }

        res.status(200).json(updatedAmount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



const getrewardedAmount = async (req,res)=> {
    try {
          
        const amountData = await Amountrewarded.findOne();
        console.log(amountData); // Verify data

        if (!amountData){
            return res.status(404).json({
                success : false,
                message : "not found",
            })
        }
         res.status(200).json({
            success : true,
            extraamount :amountData.extraamount
        })


    } catch (error) {
        console.error('Error fetching extraamount:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        })
        
        
    }
}

module.exports = { 
    updateExtraAmount,
    getrewardedAmount,
 };
