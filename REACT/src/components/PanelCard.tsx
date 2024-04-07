import { Link } from "react-router-dom"
import { convertCurrency } from "../common/lib/utils"
import { IProduct } from "../common/interfaces/Product"
import useCart from "../common/hooks/useCart"
import { toast } from "react-toastify"

type PanelCardProps ={
    product: IProduct
}
const PanelCard: React.FC<PanelCardProps> = ({product}) => {
    const {mutate} = useCart()
  return (
    <>
        <div className="product-item">
                <div className="product-media">
                    <img
                        src={product?.image}
                        className="product-media__img"
                        alt=""
                        width={280}
                        height={220}
                    />
                </div>
                <div className="product-content">
                    <h3 className="product__name">
                        <a href="">{product?.name}</a>
                    </h3>
                    <a className="product__category" href="">
                        {product?.category?.name}
                    </a>
                    <div className="product-price">
                        <span className="product-price__new">{convertCurrency.format(product?.price)}</span>
                        {/* {product.oldprice && <span className="product-price__old">{product.oldprice}</span>} */}
                    </div>
                </div>
                <div className="product-actions">
                    <button 
                    onClick={()=> mutate({action: "ADDCART", productId: product?._id, quantity: 1 }, {onSuccess: ()=> toast.success('Bạn đã thêm sản phẩm vào giỏ hàng thành công')})} 
                    className="product-actions__addtocart">
                        Add To Cart
                    </button>
                    <Link to={`/detail/${product?._id}`} className="product-actions__viewdetail">
                        View Detail
                    </Link>
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
    </>
  )
}

export default PanelCard
