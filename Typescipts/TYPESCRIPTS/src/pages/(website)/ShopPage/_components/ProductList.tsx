/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useSearchParams } from "react-router-dom"
import { IProduct } from "../../../../common/interfaces/IProduct"
import ProductCard from "../../../../components/ProductCard"

const ProductList = ({data, pagination}: any) => {
    const {totalPages} = pagination || {totalPages: 1}
    const [params] = useSearchParams()
    const page = params.get('page')

  return (
            <section className="products">
                <div className="container">  
                    <div className="product_inner">
                        <div className="product_list">
                            {data.map((item: IProduct, index: number) => (
                                <ProductCard key={index} product={item} />
                            ))}
                        </div>
                        <div className="product_action">
                            {Array.from({length: totalPages}, (_:any,i:number)=>(
                                <Link key={i} to={`?page=${i+1}`} className={parseInt(page || "1") == i + 1? 'product_action_active': 'product_action_btn'}>{i+1}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default ProductList
