import { IProduct } from "../../../../common/interfaces/IProduct"
import { convertCurrency } from "../../../../common/lib/utils"

const Related = ({related}: {related: IProduct[]}) => {
  return (
   <div className="related">
  <div className="container">
    <div className="related_title">
      <span>Related Products</span>
    </div>
    <div className="related_products">
      <div className="product-list">
        {related?.map((product: IProduct, index: number)=>(
           <div key={index} className="product-item">
                <div className="product-media">
                    <img
                        src={product.image}
                        className="product-media__img"
                        alt=""
                        width={280}
                        height={220}
                    />
                </div>
                <div className="product-content">
                    <h3 className="product__name">
                        <a href="">{product.name}</a>
                    </h3>
                    <a className="product__category" href="">
                        {product.category.name}
                    </a>
                    <div className="product-price">
                        <span className="product-price__new">{convertCurrency.format(product.price)}</span>
                        {/* {product.oldprice && <span className="product-price__old">{product.oldprice}</span>} */}
                    </div>
                </div>
                <div className="product-actions">
                    <button className="product-actions__addtocart">
                        Add To Cart
                    </button>
                    <a href={`/detail/${product._id}`} className="product-actions__viewdetail">
                        View Detail
                    </a>
                    <ul className="product-actions__more">
                        <li>
                            <a href="">
                                <img src="./public/share.png" alt="" />
                                Share
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="./public/compare.png" alt="" />
                                Compare
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="./public/Heartcard.png" alt="" />
                                Like
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        ))}
      </div>
    </div>
    <div className="related_action">
      <button>Show More</button>
    </div>
  </div>
</div>

  )
}

export default Related
