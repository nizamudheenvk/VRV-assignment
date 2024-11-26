import axios from 'axios';
const commonApi = async (httpMethod,url,reqBody)=>{
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqBody

    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err => {
        // You could log the error or return a structured object
        return { error: true, message: err.message, data: err.response ? err.response.data : null };
    });
}
export default commonApi


