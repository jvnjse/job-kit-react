import axios from "axios";

function MakeApiRequest(method, url, headers, data) {
    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data
    })
        .then(response => response.data)
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}
export default MakeApiRequest
