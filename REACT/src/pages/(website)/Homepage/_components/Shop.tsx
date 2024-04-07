import Dash from "./Dash"

const Shop = () => {
  return (
     <section className="shop">
                <div className="container">
                    <Dash title="Shop"/>
                    <div className="shop-body">
                        <div className="shop-product">
                            <img src="./public/shop1.png" alt="" />
                            <img src="./public/shop2.png" alt="" />
                            <img src="./public/shop3.png" alt="" />
                            <img src="./public/shop4.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Shop
