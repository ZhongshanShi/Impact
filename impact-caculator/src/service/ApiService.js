import axios from 'axios';

const API_URL = "http://localhost:9090/impact.com/api/";

class ApiService {

    async getAddResult(firstNumber,secondNumber) {
        let response = {status:'Success', message: undefined};
        try{
            const apiResponse = await axios.get(`${API_URL}getAddResult?firstNumber=${firstNumber}&secondNumber=${secondNumber}`);
            response.message=apiResponse.data;
        } catch(error) {
            response = {status:'Failure',message: error.response.statusMessage};
        }
        return response;
    }

    async getSubtractResult(firstNumber,secondNumber) {
        let response = {status:'Success', message: undefined};
        try{
            const apiResponse = await axios.get(`${API_URL}getSubtractResult?firstNumber=${firstNumber}&secondNumber=${secondNumber}`);
            response.message=apiResponse.data;
        } catch(error) {
            response = {status:'Failure',message: error.response.statusMessage};
        }
        return response;
    }

    async getMultiplyResult(firstNumber,secondNumber) {
        let response = {status:'Success', message: undefined};
        try{
            const apiResponse = await axios.get(`${API_URL}getMultiplyResult?firstNumber=${firstNumber}&secondNumber=${secondNumber}`);
            response.message=apiResponse.data;
        } catch(error) {
            response = {status:'Failure',message: error.response.statusMessage};
        }
        return response;
    }

}

export default new ApiService()