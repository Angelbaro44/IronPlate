import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  //? (baseURL = 'here should be your production endpoint')
  ? (baseURL = window.location.origin)
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
  }

};

export default actions;
