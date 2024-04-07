/* eslint-disable @typescript-eslint/no-explicit-any */
import useCart from "../../../common/hooks/useCart"
import { convertCurrency } from "../../../common/lib/utils"
import '../../../styles/cart.scss'
import Banner from "./_components/Banner"
import { ICart } from "../../../common/interfaces/Product"
const CartPage = () => {
   const { data, mutate, calculateTotal } = useCart()
   console.log(data)
  return (
    
       <>
       <Banner/>
        <section className="cart">
                <div className="container">
                    <div className="cart_inner">
                             <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                                <table
                                    style={{ width: "100%", paddingTop: "1em", paddingBottom: "1em" }}
                                >
                                    <thead>
                                    <tr>
                                        <th className="px-[15px]" data-priority={1}>ID</th>
                                        <th className="pl-[15px] pr-[65px]" data-priority={2}>Product Name</th>
                                        <th className="pr-[75px]" data-priority={3}>Image</th>
                                        <th className="pr-[75px]" data-priority={4}>Số Lượng</th>
                                        <th className="pr-[25px]" data-priority={5}>Price</th>
                                        <th className="mr-[15px]" data-priority={6}>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                       {data?.products?.map((item: ICart,index: number)=>(
                                         <tr key={index}>
                                            <td >{index + 1}</td>
                                            <td style={{ fontWeight: 'bold' }}>{item?.name}</td>
                                            <td><img src={item.image} width={50} alt="" /></td>
                                            <td>
                                                <div className="flex gap-2 items-center">
                                                        <button
                                                          onClick={()=> mutate({action: "DECREMENT", productId: item.productId})}
                                                        className="py-2 px-2 bg-red-400"> 
                                                            <svg
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                    fill='none'
                                                                    viewBox='0 0 24 24'
                                                                    strokeWidth={1.5}
                                                                    stroke='currentColor'
                                                                    className='w-6 h-6'
                                                                >
                                                                    <path
                                                                        strokeLinecap='round'
                                                                        strokeLinejoin='round'
                                                                        d='m4.5 15.75 7.5-7.5 7.5 7.5'
                                                                    />
                                                            </svg>
                                                        </button>
                                                        {item.quantity}
                                                        <button
                                                        onClick={()=> mutate({action: "INCREMENT", productId: item.productId})}
                                                        className="py-2 px-2 bg-emerald-400"> 
                                                                <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            fill='none'
                                                            viewBox='0 0 24 24'
                                                            strokeWidth={1.5}
                                                            stroke='currentColor'
                                                            className='w-6 h-6'
                                                        >
                                                            <path
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                                d='m4.5 15.75 7.5-7.5 7.5 7.5'
                                                            />
                                                                </svg>
                                                        </button>
                                                </div>
                                            </td>
                                            <td>{convertCurrency.format(item.price)}</td>
                                            <td>
                                                <button onClick={()=> mutate({action: "REMOVE", productId: item.productId})}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48wQgJoZ7HBkR8cSs2u1tkb6F_YY_ujkJWnpZTJvaLg&s" width={30} alt="" /></button>
                                            </td>
                                        </tr>
                                       ))}
                                    </tbody>
                                </table>
                                {data?.products.length === 0 && <div className="text-[2.5rem] text-center mt-[55px]">Bạn chưa có sản phẩm nào</div>}
                                </div>
                    <div className="cart_action">
                        <div className="cart_action_inner">
                        <h4>Cart Totals</h4>
                        <div className="cart_action_subtotal">
                            <span>Số lượng sản phẩm</span>
                            
                        </div>
                        <div className="cart_action_total">
                            <span>Total</span>
                            <span className="price">{convertCurrency.format(calculateTotal())}</span>
                        </div>
                        <div className="cart_action_btn">
                            <a href="./checkout.html">Check Out</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
       </>

  )
}

export default CartPage
