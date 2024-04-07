import { ICategory } from "./Category"

export interface IProduct{
    _id?: number | string,
    name: string,
    description: string,
    price: number,
    oldprice: number,
    category: ICategory
    image: string
}
export interface ICart{
    name: string,
    price: number,
    image: string,
    quantity: number
    productId: string
}