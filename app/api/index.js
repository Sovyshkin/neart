import axios from 'axios'

export default axios.create({
  baseURL: 'http://example.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})
