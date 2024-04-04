export interface IProduct {
    _id?: string,
    name: string,
    description: string,
    price: number,
    oldprice: number,
    category: {
        name: string
        slug: string
    }
    image: string
}