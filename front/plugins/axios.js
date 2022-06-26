import axios from 'axios';

export default axios.create({
  baseURL: prosecc.env.API_ENDPOINT,
});