import axios from 'axios';
import { useAuth, getToken, authFetch, login, logout} from '../AuthProvider';

let APIKit = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
});

export default APIKit;