import axios from 'axios';

const request = ({method, path, baseurl='https://bacon-api.herokuapp.com', headers = {'Content-Type': 'application/json'}, data, callback}) => {
  axios({
    method,
    url: `${baseurl}/${path}`,
    headers,
    data
  })
  .then(response => callback(response))
  .catch(function(error){
    console.error(error);
  })
}

export default request;
