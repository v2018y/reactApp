import Axios from "axios"
import { ServerUrl } from "../config/config";

class MainClass{

    // This method creating Instance for User Api calling.
    CreateInstance=(requestURL,userMethod)=>{
        try {
            if(requestURL && userMethod ){
                return Axios.create({
                    baseURL: ServerUrl,
                    method: userMethod,
                    url:requestURL,
                    headers: {
                        "content-type": "application/json"
                    }
                });
            }else{
                throw new Error("You provided Worng Data");
            }
        } catch (error) {
            return error;
        }
    }

    processApi=async(processData)=>{
        try {
            if(processData){
                let promis=null;
                if(processData.bodyData){
                   promis= await this.CreateInstance(processData.requestURL,processData.userMethod).request({ data: processData.bodyData });
                }else{
                   promis= await this.CreateInstance(processData.requestURL,processData.userMethod).request();
                }
                return promis;
            }else{
                throw new Error("Plese Provide Correct data")
            }
        } catch (error) {
            return error;
        }
    }
}

export default MainClass;