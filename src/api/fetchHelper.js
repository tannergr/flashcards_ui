import Cookies from 'js-cookie';

const baseURL = (process.env.prod !== 'true') ?
  "http://localhost:8080":
  "www.somethingelse.com"

export default function(endPoint, method, body){
  try{
    if(method=="GET"){
      return fetch(`${baseURL}${endPoint}`,{
        method:method,
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Authentication": Cookies.get('jwt')
        }
      })
      .then(response=>response.json())
      .then(response=>{return response})
    }
    else{
      return fetch(`${baseURL}${endPoint}`,{
        method:method,
        body: JSON.stringify(body),
        headers:{
          "Content-Type": "application/json",
          "Authentication": Cookies.get('jwt')
        }
      })
      .then(response=>response.json())
      .then(response=>{return response})
    }
  } catch(e){
    console.log(e)
  }

}