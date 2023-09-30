import axios from 'axios'
//import Reseñas from './componentes/Reseñas';

export const getAllReseñas = () => {
    return axios.get('http://127.0.0.1:8000/resenas/api/resena/')
}
