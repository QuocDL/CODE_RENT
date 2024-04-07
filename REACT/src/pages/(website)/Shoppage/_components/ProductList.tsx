/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useSearchParams } from "react-router-dom"
import PanelCard from "../../../../components/PanelCard"
import { IProduct } from "../../../../common/interfaces/Product"

const ProductList = ({data, pagination}: any) => {
    const {totalPages} = pagination || {totalPages: 1}
    const [params] = useSearchParams()
    const page = params.get('page')

  return (
            <section className="products">
                <div className="container">  
                    <div className="product_inner">
                        {!data && <div className="text-[2.5rem] text-center">Không có sản phẩm nào</div>}
                        <div className="product_list">
                            {data?.map((item: IProduct, index: number) => (
                                <PanelCard key={index} product={item} />
                            ))}
                        </div>
                        {data && 
                        <div className="product_action">
                            {Array.from({length: totalPages}, (_:any,i:number)=>(
                                <Link key={i} to={`?page=${i+1}`} className={parseInt(page || "1") == i + 1? 'product_action_active': 'product_action_btn'}>{i+1}</Link>
                            ))}
                        </div>}
                    </div>
                </div>
            </section>
  )
}

export default ProductList
