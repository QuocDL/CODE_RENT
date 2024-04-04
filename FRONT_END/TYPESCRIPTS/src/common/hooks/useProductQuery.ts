import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getProductById } from "../../services/Product"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useProductQuery = (option?: any)=>{
    const {data, ...rest} = useQuery({
        queryKey: ["PRODUCT", option],
        queryFn: async()=>{
            return option?.id ? await getProductById(option.id) : await getAllProducts(option)
        },
    })

    return {data, ...rest}
}