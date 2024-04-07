/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import '../../../style/Admin.scss'
import { IProduct } from '../../../common/interfaces/IProduct'
import { useProductQuery } from '../../../common/hooks/useProductQuery'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Dialog from '../../../components/Dialog'
import { convertCurrency } from '../../../common/lib/utils'

const Dashboard = () => {
    const [params] = useSearchParams()
   const queryClient = useQueryClient()
       const [dialog, setDialog] = useState({
        message: "",
        status: false
    })
//  destructuring pagination and data
    const limit = 8
    const page = params.get('page')
     const {data} = useProductQuery({_page: page, _limit: limit,_expand:"category"})
    const {data: products, pagination} = data || {data: [], pagination: {}}
// get params page
   
    const {totalPages} = pagination || {totalPages: 1}
    
// dialog
    const idProductRef: any = useRef()
    console.log(idProductRef)
   const handleDialog =(message: string, status: boolean)=>{
        setDialog({
            message: message,
            status: status
        })
    }
   const {mutate} = useMutation({
      mutationFn: async(id)=>{
         await axios.delete(`http://localhost:8000/api/products/${id}`)
      },
      onSuccess: ()=>{
         queryClient.invalidateQueries({
            queryKey: ['PRODUCT']
         })
      }
   })
// handle remove
    const onHandleRemove = (product: IProduct)=>{
        idProductRef.current = product._id
       handleDialog(`bạn có chắc chắn muốn xóa ${product.name}`, true)
    }
    const conFirmDialog = (choose: boolean)=>{
        if(choose){
            mutate(idProductRef.current)
            toast.success(`Delete complete!`)
            handleDialog('',false)
        }else{
            handleDialog('', false)
        }
    }
    return (
        <>
            <div className="container">
                <div className="admin_list_inner">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>  <Link className='addnew' to={`addproduct`}>
                                    Add New Product
                                </Link></th>
                            </tr>
                        </thead>
                        <thead></thead>
                        <tbody> 
                            {products?.map((item: IProduct, index: number) => (
                                <tr key={index}>
                                    <td >{index + 1}</td>
                                    <td style={{ fontWeight: 'bold' }}>{item.name}</td>
                                    <td><img src={item.image} width={50} alt="" /></td>
                                    <td style={{ color: '#9F9F9F' }}>{item.category.name}</td>
                                    <td>{convertCurrency.format(item.price)}</td>
                                    <td>
                                        <div className="action_table">
                                            <button onClick={() => onHandleRemove(item)}>Delete</button>
                                            <Link to={`edit/${item._id}/product`}>Edit</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                           
                        </tbody>
                    </table>
                    {products?.length === 0 && <div className='text-[2.5rem] text-center mt-[25px]'>Không có sản phẩm nào</div>}
                     <div className="list_page_action">
                                {Array.from({length: totalPages}, (_:any,i:number)=>(
                                    <Link key={i} to={`?page=${i+1}`} className={parseInt(page || "1") == i + 1? 'product_list_active': 'product_action_list'}>{i+1}</Link>
                                ))}
                            </div>
                </div>
            </div>
            {dialog.status && <Dialog onDialog={conFirmDialog} message={dialog.message}/>}
            <ToastContainer/>
        </>
    )
}

export default Dashboard