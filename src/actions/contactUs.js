import axios from 'axios';

import {Api} from '../services/configs';

export const contactUs = (data, history, dispatch, addToast) => {
    axios.put(`${Api}/v1/auth/contactUs`, data)
    .then( resp => {
        console.log(resp);
    })
    .catch( err => addToast('Something went wrong!', { appearance: 'danger'}))
}