import TiittleHr from './TiittleHr'
import { IProduct } from '../../../../common/interfaces/IProduct'
import ProductCard from '../../../../components/ProductCard'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const News = ({products}: any) => {
  return (
      <section className="news">
                <div className="container">
                   <TiittleHr title='News'/>
                    <div className="body">
                        <div className="product-list">
                            {products?.data?.map((item: IProduct, index: number) => index < 4 && (
                                <ProductCard key={index} product={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default News
