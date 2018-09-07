import axios from 'axios';

export default {
  user: {
    signin: (credentials) =>
      axios.post('/api/auth', { credentials }).then(res => res.data.user)
  }
}
