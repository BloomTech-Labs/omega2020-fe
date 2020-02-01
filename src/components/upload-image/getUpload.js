import axios from 'axios'

export const GetUpload = (formData, formConfig) => {
    const api = 'https://api.lambda-omega2020.com/demo_file';
    return axios
    .post(api, formData, formConfig)
    .then(res => {
        console.log("UPLOAD AXIOS", res)
        console.log("UPLOAD AXIOS", formData)
        console.log("UPLOAD AXIOS", formConfig)

        return res;
    })
    .catch(err => console.log(err.response));
        };