import axios from 'axios';
import SummaryApi from '../common/SummaryApi.jsx';

export const fetchUserInvestments = async () => {
  try {
    const response = await axios.get(SummaryApi.investmentsLog.url, {
      withCredentials: true, 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user investments:', error);
    return { success: false, message: error.message };
  }
};
