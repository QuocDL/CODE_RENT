import ActionBar from "./_components/ActionBar"
import DetailProduct from "./_components/DetailProduct"
import '../../../style/detail.scss'
import Description from "./_components/Description"
import { useParams } from "react-router-dom"
import { useProductQuery } from "../../../common/hooks/useProductQuery"
import Related from "./_components/Related"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const DetailPage = () => {
    const {id} = useParams()
    const {data: product, } = useProductQuery({id: id!})
    const {data: relatedProduct}= useQuery({
        queryKey: ["PRODUCT_RELATED"],
        queryFn: async()=>{
            const {data} = await axios.get(`http://localhost:8000/api/products/${product?.category._id}/related/${product._id}`)
            return data
        }
    })
  return (
    <>
      <ActionBar/>
      <DetailProduct product={product}/>
      <Description/>
      <Related related={relatedProduct}/>
    </>
  )
}

export default DetailPage
