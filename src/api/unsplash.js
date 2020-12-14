import axios from 'axios';

export default axios.create ({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 
          'Client-ID jWtHHsLgxO2nCpXPCRnAj_dLxnKGsFPZb77sTdqyGaM',
      },
});
