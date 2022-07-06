import axios from 'axios'

const listProductos = async (state)=>{
    const peticion = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    state(peticion.data.drinks)
    console.log('datos', peticion);
}

export{
    listProductos
}