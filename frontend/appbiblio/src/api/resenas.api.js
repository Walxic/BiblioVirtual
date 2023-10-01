import axios from 'axios'
/*import Resenas from './componentes/Reseñas';*/

export const getAllResenas = () => {
    return axios.get("http://localhost:8000/resenas/api/resena/")
}
