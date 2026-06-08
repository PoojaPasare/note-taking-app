// import axios from "axios"

// const BACKEND_URL=axios.create({
//     baseURL:"http://localhost:4001/api/v1/noteapp"
// })

// export default BACKEND_URL


// import axios from "axios";

// const BACKEND_URL = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// export default BACKEND_URL;


import axios from "axios";

console.log("API URL =", import.meta.env.VITE_API_URL);

const BACKEND_URL = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default BACKEND_URL;