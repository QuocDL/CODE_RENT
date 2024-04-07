/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import '../../../../styles/admin.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useProductQuery } from '../../../../common/hooks/useProductQuery'
import { IProduct } from '../../../../common/interfaces/Product'
import { convertCurrency } from '../../../../common/lib/utils'
import Dialog from '../../../../components/Dialog'

const ProductList = () => {
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
                 <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                    <table
                        style={{ width: "100%", paddingTop: "1em", paddingBottom: "1em" }}
                    >
                        <thead>
                        <tr>
                            <th data-priority={1}>ID</th>
                            <th data-priority={2}>Product Name</th>
                            <th data-priority={3}>Image</th>
                            <th data-priority={4}>Category</th>
                            <th data-priority={5}>Price</th>
                            <th>  <Link className='addnew' to={`addproduct`}>
                                Add New Product
                            </Link></th>
                        </tr>
                        </thead>
                        <tbody>
                        {products?.map((item: IProduct, index: number)=>(
                              <tr key={index}>
                                    <td >{index + 1}</td>
                                    <td style={{ fontWeight: 'bold' }}>{item.name}</td>
                                    <td><img src={item.image} width={50} alt="" /></td>
                                    <td style={{ color: '#9F9F9F' }}>{item.category.name}</td>
                                    <td>{convertCurrency.format(item.price)}</td>
                                    <td>
                                        <div className="action_table">
                                            <button onClick={() => onHandleRemove(item)}>Delete</button>
                                            <Link to={`${item._id}/edit`}>Edit</Link>
                                        </div>
                                    </td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                     {!products && <div className='text-[2.5rem] text-center mt-[25px]'>Không có sản phẩm nào</div>}
                    {products &&  <div className="list_page_action">
                                {Array.from({length: totalPages}, (_:any,i:number)=>(
                                    <Link key={i} to={`?page=${i+1}`} className={parseInt(page || "1") == i + 1? 'product_list_active': 'product_action_list'}>{i+1}</Link>
                                ))}
                        </div>}
                    </div>
            {dialog.status && <Dialog onDialog={conFirmDialog} message={dialog.message}/>}
            <ToastContainer/>
        </>
    )
}

export default ProductList