import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
type useProductMutationProps = {
    action: "CREATE" | "DELETE" | "UPDATE"
    id? : any
    onSuccess?: () => void
}
const useProductMutation = ({action, id}: useProductMutationProps)=>{
    const queryClient = useQueryClient()
      const {mutate, ...rest} = useMutation({
        mutationFn: async(product)=>{
            switch(action){
                case "CREATE":
                    await axios.post('http://localhost:8000/api/products', product)
                break;
                case "UPDATE":
                    await axios.put(`http://localhost:8000/api/products/${id}`, product)
                break;
            }
        },
        onSuccess: (data)=>{
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT"]
            })
        }
    })
    const onSubmit: SubmitHandler<IProduct> = async (product) => {
        mutate(product);
    };
    return {mutate, onSubmit, ...rest}
}

export default useProductMutation