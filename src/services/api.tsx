import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjkwMjhiNjBiMzBkY2U2YjJkYTI0ODFmZjU2NmFlZiIsIm5iZiI6MTcyMDgyNTQyOS4yNTU3MzYsInN1YiI6IjY2OGY4NWEzNmUzZDNkNDIzMmE3MDdiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KBOfBp4XbU068yoJ57BIIZmPhAynEV5VU2SHA6neE7c'
    }
});

export default api;