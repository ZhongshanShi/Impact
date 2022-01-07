import axios from 'axios';

const API_URL = "http://localhost:8080/impact.com/api/";

class ApiService {

    async getResult(givenNodeId) {
        let response = {status:'Success', message: undefined};
        try{
            const apiResponse = await axios.get(`${API_URL}getResult?input=${givenNodeId}`);
            response.message=apiResponse.data;
        } catch(error) {
            response = {status:'Failure',message: error.response.statusMessage};
        }
        return response;
    }

}

export default new ApiService()