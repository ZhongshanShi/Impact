import axios from 'axios';

const API_URL = "http://localhost:9090/tradeshift.com/api/";

class ApiService {

    async getDescendantNodesId(givenNodeId) {
        let response = {status:'Success', message: undefined};
        try{
            const apiResponse = await axios.get(`${API_URL}getDescendantNodesId/?givenNodeId=${givenNodeId}`);
            response.message=apiResponse.data;
        } catch(error) {
            response = {status:'Failure',message: error.response.statusMessage};
        }
        return response;
    }

    async changeParent(givenNodeId,targetNodeId) {
        let response = {status:'Success', message: undefined};
        try{
            const apiResponse = await axios.post(`${API_URL}changeParent/?givenNodeId=${givenNodeId}&targetNodeId=${targetNodeId}`);
            response.message=apiResponse.data;
        } catch(error) {
            response = {status:'Failure',message: error.response.statusMessage};
        }
        return response;
    }
}

export default new NodeService()