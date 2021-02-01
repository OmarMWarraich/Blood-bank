import Axios from "axios"


function AxiosCall(request){
    return new Promise((resolve,reject)=>{
        try{
            Axios(request)
                .then(response=>{
                    if(response.status >= 200 && response.status < 300)
                        resolve({statusCode:200, body: response.data})
                    else
                        reject({statusCode: response.status , body: response.data})

                })
                .catch(error =>{
                    reject({statusCode: response.status , body: response.data})
                })

        }
        catch(error){
            reject({statusCode: 500 , body: response.data})
        }
    })
}

export default AxiosCall
