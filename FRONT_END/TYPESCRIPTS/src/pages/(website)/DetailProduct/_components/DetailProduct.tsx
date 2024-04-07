import { IProduct } from "../../../../common/interfaces/IProduct"
import { convertCurrency } from "../../../../common/lib/utils"

const DetailProduct = ({product}: {product: IProduct}) => {
  return (
   <section className="detail">
  <div className="container">
    <div className="detail_inner">
      <div className="detail_media">
        <div className="detail_media_slide">
          <div>
            <img src="/public/slide1.png" alt="" />
          </div>
          <div>
            <img src="/public/slide2.png" alt="" />
          </div>
          <div>
            <img src="/public/slide3.png" alt="" />
          </div>
          <div>
            <img src="/public/slide4.png" alt="" />
          </div>
        </div>
        <div className="detail_media_thumbnail">
          <div className="detail_media_thumbnail__bg">
            <img src={product?.image} width={350} height={300} alt="" />
          </div>
        </div>
      </div>
      <div className="detail_content">
        <div className="detail_content">
          <h2>{product?.name}</h2>
          <span>{convertCurrency.format(product?.price)}</span>
          <div className="detail_content__star">
            <div className="flex gap-2">
              <img src="/public/star.png" alt="" />
              <img src="/public/star.png" alt="" />
              <img src="/public/star.png" alt="" />
              <img src="/public/star.png" alt="" />
              <img src="/public/star_half.png" alt="" />
            </div>
            <div className="detail_content__star__view">
              <span>5 Customer Review</span>
            </div>
          </div>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="detail_content__size">
            <span>Size</span>
            <div className="detail_content__size__btn">
              <button>L</button>
              <button>XL</button>
              <button>XS</button>
            </div>
          </div>
          <div className="detail_content__color">
            <span>Color</span>
            <div className="detail_content__color__btn">
              <button className="violet" />
              <button className="black" />
              <button className="brown" />
            </div>
          </div>
          <div className="detail_content_action">
            <div className="detail_content_action__number">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <div className="detail_content_action__addcart">
              <button>Add To Cart</button>
              <button>+ Compare</button>
            </div>
          </div>
          <div className="handle" />
          <div className="detail_content_more">
            <div className="detail_content_more_box">
              <div className="name_more">
                <span>SKU</span>
              </div>
              <span className="detail_content_more__dot">:</span>
              <span>SS001</span>
            </div>
            <div className="detail_content_more_box">
              <div className="name_more">
                <span>Category</span>
              </div>
              <span className="detail_content_more__dot">:</span>
              <span>Sofas</span>
            </div>
            <div className="detail_content_more_box">
              <div className="name_more">
                <span>Tags</span>
              </div>
              <span className="detail_content_more__dot">:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="detail_content_more_box">
              <div className="name_more">
                <span>Share</span>
              </div>
              <span className="detail_content_more__dot">:</span>
              <span className="detail_content_more__share">
                <img src="/public/fbicon.png" alt="" />
                <img src="/public/akaricon.png" alt="" />
                <img src="/public/twicon.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default DetailProduct
