import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:6500/api" 
})

export default api