import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

export async function autenticacion({ username, contrasena }) {
    const data = {
        username,
        contrasena
    }
    try {
        const response = await instance.post('auth', data)
        return response.data
    } catch (error) {
        throw error

    }

}

export async function librosapi({ token }) {

    try {
        const response = await instance.get('libro', {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}


export async function categoriasApi({ token }) {

    try {
        const response = await instance.get('categoria', {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}


export async function guardaLibro({ token, formData }) {


    try {
        const response = await instance.post('libro', formData, {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}

export async function guardarCategoria({ token, nombre }) {
    const data = {
        nombre
    }
    try {
        const response = await instance.post('categoria', data, {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}



export async function pedidosListar({ token }) {
    console.log(token);

    try {
        const response = await instance.get('pedido', {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}


export async function guardCliente({ token, formData }) {


    try {
        const response = await instance.post('cliente', formData, {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}



export async function librosApi({ token }) {


    try {
        const response = await instance.get('libro', {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}



export async function clientesApi({ token }) {


    try {
        const response = await instance.get('cliente', {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}


export async function prestarLibro({ token, selectedCliente, selectedLibro }) {

    const data = {
        cliente: selectedCliente,
        libro: selectedLibro
    }


    try {
        const response = await instance.post('pedido', data, {
            headers: {
                Authorization: `Barear ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error

    }

}
