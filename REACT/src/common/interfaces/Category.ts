import { IProduct } from "./Product"

export interface ICategory{
    _id?: string
    name: string,
    slug: string
    products: IProduct[]
}