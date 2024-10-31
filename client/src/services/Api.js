import axios from 'axios'
const Api_url='http://localhost:5000';

export const uploadFile=async(data)=>{
    try {
        let response =await axios.post(`${Api_url}/upload`,data);
        return response.data;

    } catch (error) {
        console.error('error while calling API',error.message)
    }
}