import { IProduct } from "../common/interfaces/IProduct";
import instance from "../configs/axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllProducts = async(params?:any): Promise<IProduct[]> =>{
    try {
        const response = await instance.get('/products', {params})
        return response.data
    } catch (error) {
        return []
    }
}

export const getProductById = async(id: number | string)=>{
    try {
        const response = await instance.get(`/products/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

