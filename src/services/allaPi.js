import commonApi from "./CommonApi";
import SERVERURL from "./SERVERURL";

export const saveuserAPI = async (userDetails)=>{
    return await commonApi("POST",`${SERVERURL}/uploademp`,userDetails)
  }

  export const getalluserApi = async ()=>{
    return await commonApi("GET",`${SERVERURL}/uploademp`,{})
  }
  export const deletealluserApi = async(id)=>{
    return await commonApi("DELETE",`${SERVERURL}/uploademp/${id}`,{})
  }
  export const EdituserApi = async (userDetails)=>{
    return await commonApi("PUT",`${SERVERURL}/uploademp/${userDetails.id}`,userDetails)
    }


  
  
