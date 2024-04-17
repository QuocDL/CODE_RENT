import { useParams } from "react-router-dom"
import ActionBar from "./_components/ActionBar"
import { useProductQuery } from "../../../common/hooks/useProductQuery"
import DetailProduct from "./_components/DetailProduct"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Related from "./_components/Related"
import Description from "./_components/Description"
import '../../../styles/detail.scss'
import useCart from "../../../common/hooks/useCart"
import { ToastContainer } from "react-toastify"
const DetailPage = () => {
    const {id} = useParams()
    const {data: product, } = useProductQuery({id: id!, _expand: "category"})
    const {mutate} = useCart()
    const {data: relatedProduct}= useQuery({
        queryKey: ["PRODUCT_RELATED"],
        queryFn: async()=>{
            const {data} = await axios.get(`http://localhost:8000/api/products/${product?.category._id}/related/${product._id}`)
            return data
        }
    })
  return (
    <>
      <ActionBar action={product}/>
      <DetailProduct mutate={mutate} product={product}/>
      <Description/>
      <Related related={relatedProduct}/>
      <ToastContainer/>
    </>
  )
}

export default DetailPage
