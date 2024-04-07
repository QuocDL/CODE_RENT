/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import '../../../style/Form.scss'
import axios from 'axios'
import { ICategory } from '../../../../common/interfaces/ICategory'
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductQuery } from '../../../../common/hooks/useProductQuery'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formAddSchema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(1000).required(),
    image: Joi.string().required()
})
const AdminProductUpdate = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {register, handleSubmit,reset} = useForm()
    const {data: product} = useProductQuery({id})
    useEffect(()=>{
      reset({
        ...product,
        category: product?.category._id
      })
    },[reset, id, product])
    const {data: category} = useQuery({
        queryKey: ["CATEGORY"],
        queryFn: async()=>{
            const {data} = await axios.get(`http://localhost:8000/api/categories`)
            return data
        }
    })
    const {mutate: update} = useMutation({
        mutationFn: async(data)=>{
            await axios.put(`http://localhost:8000/api/products/${id}`, data)
        },
        onSuccess: ()=>{
            navigate('/admin')
            queryClient.invalidateQueries({
                queryKey: ["PRODUCTS"]
            })
        }
    })
    const onHandleSubmit = (data: any) =>{
        update(data)
    }
    const Select = React.forwardRef(({ onChange, onBlur, name, label, defaultValues }: any, ref: any) => (
            <>
                <label>{label}</label>
                <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} defaultValue={defaultValues}>
                    {category?.map((item: ICategory, index: number)=>(
                        <option key={index} value={item?._id}>{item?.name}</option>
                    ))}
                </select>
            </>
    ));
  return (
    <div className='container pt-[25px]'>
        <div className="form_inner">
            <h1 className='text-[2.5rem] text-center'>Update Product</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)} action="">
                <div className="inputType">
                        <label>title</label>
                        <input  type="text" {...register('name')}/>
                </div>
                <div className="inputType">
                            <Select label="Category" {...register("category")} defaultValues={product?.category?.name}/>
                        </div>
                  <div className="inputType">
                        <label>Image</label>
                        <input {...register('image')} type="text"  />
                </div>
                 <div className="inputType">
                        <label>Price</label>
                        <input {...register('price')} type="number" />
                </div>
              
                <div className='div_btn'>
                      <button type='submit' className='button'>Update Product</button>
                </div>
            </form>
        </div>
      </div>
  )
}

export default AdminProductUpdate
