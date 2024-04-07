import { useQuery } from "@tanstack/react-query"
import { getAllCategory, getCategoryById } from "../../services/Category"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCategoryQuery = (option?: any)=>{
    const {data, ...rest} = useQuery({
        queryKey: ["CATEGORY", option],
        queryFn: async()=>{
            return option?.id ? await getCategoryById(option.id) : await getAllCategory()
        },
    })

    return {data, ...rest}
}