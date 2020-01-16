import axios from 'axios';

const request = ({method, path, baseurl='http://localhost:8000', headers = {"Content-Type": "application/json"}, data, callback=undefined}) => {
  axios({
    method,
    url: `${baseurl}/${path}`,
    headers,
    data,
  })
  .then(response => callback===undefined? response : callback(response))
  .catch(function(error){
    console.error(error);
  })
}

export const userStruct = ({name='', when=[], id='', pw=''}) => ({id, pw, name, when})

export const pathToURL = (path, baseurl='http://localhost:8000') => `${baseurl}/${path}`;

export default request;
