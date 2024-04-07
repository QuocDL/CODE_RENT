import { ICategory } from "../common/interfaces/Category";
import instance from "../configs/axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllCategory = async(): Promise<ICategory[]> =>{
    try {
        const response = await instance.get('/categories')
        return response.data
    } catch (error) {
        return []
    }
}

export const getCategoryById = async(id: number | string)=>{
    try {
        const response = await instance.get(`/categories/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

