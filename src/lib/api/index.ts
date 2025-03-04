import axios from "axios";

axios.defaults.baseURL="https://node-mail-1.onrender.com/";

export const SendMail= async (data:any)=>{
    const Url="/send/mail";
    try{
        const response = await axios.post(Url,data)
        return response;
    }
    catch(error){
        throw error;
    }

};