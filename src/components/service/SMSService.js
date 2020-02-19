import MainClass from "./CommonClass";


class SMSService extends MainClass{

    sendSMS=async (successMethod,errorMethod,userData)=>{
        let data={
            requestURL:'sms/sendSMS',
            userMethod:'POST',
            bodyData:userData
        }
        try {
            let result= await this.processApi(data);
            console.log("result",result)
            successMethod && successMethod(result);
        } catch (error) {
            errorMethod && errorMethod(error);
        }
    }
}

export default SMSService;