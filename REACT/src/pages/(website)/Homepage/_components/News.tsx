import { IProduct } from '../../../../common/interfaces/Product'
import PanelCard from '../../../../components/PanelCard'
import Dash from './Dash'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const News = ({products}: any) => {
  return (
      <section className="news">
                <div className="container">
                   <Dash title='News'/>
                    <div className="body">
                        <div className="product-list">
                            {products?.data?.map((item: IProduct, index: number) => (
                                <PanelCard key={index} product={item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default News
