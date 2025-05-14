import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export default {
  ask: (question) => axios.post(`${API_BASE}/ask`, { question }),
};