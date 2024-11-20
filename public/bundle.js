'use strict';

const fetchProductos = async () => {
    const endpoint = 'https://apiproductos-pbhp.onrender.com/api/lista';
    
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };

    try{
        const respuesta = await fetch(endpoint, options);
        const data = await respuesta.json();
        console.log(respuesta);
    }catch (e){
        console.log(e);
    }
};

fetchProductos();
