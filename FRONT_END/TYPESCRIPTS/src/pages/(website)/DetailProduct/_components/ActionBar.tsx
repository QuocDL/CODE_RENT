import { IProduct } from "../../../../common/interfaces/IProduct"

const ActionBar = ({action}: {action: IProduct}) => {
  return (
    <section className="action-bar">
    <div className="container">
        <div className="action-bar_inner">
        <div className="action-bar_inner_left">
            <div className="action-bar_inner_left_filter">
            <a href="index.html">
                <span>Home</span>
            </a>
            <div>
                <a href="">
                <img src="./img/arrownav.png" alt="" />
                </a>
            </div>
            </div>
            <div className="action-bar_inner_left_filter">
            <a href="shop.html">
                <span>Shop</span>
            </a>
            <div>
                <a href="">
                <img src="./img/arrownav.png" alt="" />
                </a>
            </div>
            </div>
            <div className="action-bar_inner_left_filter">
                <span>{action?.category?.name}</span>
            <div>
                <a href="">
                <img src="./img/arrownav.png" alt="" />
                </a>
            </div>
            </div>
            <div className="action-bar_inner_left_showing">
            <span>{action.name}</span>
            </div>
        </div>
        </div>
    </div>
    </section>

  )
}

export default ActionBar
