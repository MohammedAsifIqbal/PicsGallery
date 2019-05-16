import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID 540ece95f05352209ce188cb387a35b397a2ffdca9f1e0e993b43448ea2e5db5'
    }
});