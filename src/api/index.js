import axios from 'axios';

const baseURL = 'http://172.30.1.14:1317/coreators/tokenity';
axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.get['Accept'] = 'application/json'; // default header for all GET request
axios.defaults.headers.post['Accept'] = 'application/json'; // default header for all POST request
// axios.defaults.withCredentials = true;

let config = {
  // headers: {
  //     'Content-type': 'application/json',
  //     session: JSON.stringify({
  //         sender: "provider",
  //         device: "abc"
  //     }),
  // }
};

export const getAPI = async (path) => {
  const response = await axios.get(path, config);
  return response;
};

export const postAPI = async (path, data) => {
  const response = await axios.post(path, data, config);
  // return ResponseControl(response);
  return response;
};

export const putAPI = async (path, data) => {
  const response = await axios.put(path, data, config);
  // return ResponseControl(response);
  return response;
};

export const deleteAPI = async (path) => {
  const response = await axios.delete(path, config);
  // return ResponseControl(response);
  return response;
};

// const ResponseControl = (response) => {
//     let status = response.status
//     // const dispatch = useDispatch()
//     // console.log("API Response : ", response)

//     if(status < 200){

//     }else if(200 <= status && status < 300){
//         return response
//     }else if(status < 400){

//     }else if(status < 500){

//     }else{
//     }

//     return response
// }
