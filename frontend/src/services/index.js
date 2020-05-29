import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://radiant-waters-58767.herokuapp.com')
  // ? (baseURL = window.location.origin)
  : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')
  },

  updateData: async (data)=>{
    return await service.post('/admindata',data)
  },

  getData: async ()=>{
    return await service.get('/admindata')
  },

  postQuote: async (data)=>{
    return await service.post('/quotes',data)
  },
  deleteQuote: async (data)=>{
    return await service.post('/quotes/delete',data)
  },
  getQuote: async ()=>{
    return await service.get('/quotes')
  }
};

export default actions;
