/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react"
import { useCategoryQuery } from "../../../../common/hooks/useCategoryQuery"
import { ICategory } from "../../../../common/interfaces/Category"
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import Dialog from "../../../../components/Dialog"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
const CategoryList = () => {
    const {data} = useCategoryQuery()
    const idCategoryRef: any =useRef()
    const [dialog, setDialog] = useState({
        message: "",
        status: false
    })
    const queryClient = useQueryClient()
    const onHandleRemove = (category: ICategory)=>{
        idCategoryRef.current = category._id
       handleDialog(`bạn có chắc chắn muốn xóa ${category.name}. 
       Nếu bạn xóa ${category.products.length} sản phẩm sẽ bị xóa theo danh mục!`, true)
    }
     const handleDialog =(message: string, status: boolean)=>{
        setDialog({
            message: message,
            status: status
        })
    }
    const {mutate} = useMutation({
        mutationFn: async(id)=>{
            await axios.delete(`http://localhost:8000/api/categories/${id}`)
        },
        onSuccess: ()=>{
            toast.success('Xóa danh mục thành công')
            queryClient.invalidateQueries({
                queryKey: ['CATEGORY']
            })
        },
        onError: (err)=>{
            console.log(err)
        }
    })
    const conFirmDialog = (choose: boolean)=>{
        if(choose){
            mutate(idCategoryRef.current)
            handleDialog('',false)
        }else{
            handleDialog('', false)
        }
    }
  return (
    <>
     <div id="recipients" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
  <table
    id="example"
    className="stripe hover"
    style={{ width: "100%", paddingTop: "1em", paddingBottom: "1em" }}
  >
    <thead>
      <tr>
        <th data-priority={1}>#</th>
        <th data-priority={2}>Tên danh mục</th>
        <th data-priority={4}>Số lượng sản phẩm</th>
        <th data-priority={5}>Action</th>
      </tr>
    </thead>
    <tbody>
     {data?.map((item: ICategory, index: number)=>(
         <tr key={index}>
        <td>{index + 1}</td>
        <td>{item?.name}</td>
        <td>{item?.products?.length}</td>
        <td>
            <div className="flex gap-5 items-center">
                 <Link to={''} className="w-[65px] h-[25px] flex justify-center items-center rounded-[5px] bg-blue-500 text-white">Edit</Link>
            </div>
        </td>
      </tr>
     ))}
    </tbody>
  </table>
  {data?.length === 0 && <div className='text-[2.5rem] text-center mt-[25px]'>Không có danh mục nào</div>}
</div>
{dialog.status && <Dialog onDialog={conFirmDialog} message={dialog.message}/>}
<ToastContainer/>
    </>
  )
}

export default CategoryList
