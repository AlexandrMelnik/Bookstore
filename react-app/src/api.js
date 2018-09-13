import axios from 'axios';

export default {
  user: {
    signin: credentials =>
      axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post('/api/users', { user }).then(res => res.data.user),
    confirm: token =>
      axios.post('/api/auth/confirm', { token }).then(res => res.data.user),
  },
  books: {
    getBooks: () =>
      axios.get('/api/books/get_all').then(res => res.data.books)
  }
}
