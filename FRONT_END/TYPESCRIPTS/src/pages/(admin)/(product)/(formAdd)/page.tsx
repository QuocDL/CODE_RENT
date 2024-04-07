/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query'
import '../../../style/Form.scss'
import axios from 'axios'
import { ICategory } from '../../../common/interfaces/ICategory'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const formAddSchema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(1000).required(),
    category: Joi.string().required(),
    image: Joi.string().required()
})
const AdminProductAdd = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(formAddSchema),
        defaultValues: {
            name: '',
            price: 0,
            category: '',
            image: ''
        }
    })
    const {data: category} = useQuery({
        queryKey: ["CATEGORY"],
        queryFn: async()=>{
            const {data} = await axios.get('http://localhost:8000/api/categories')
            return data
        }
    })
    // mutate submit
    const {mutate} = useMutation({
        mutationFn: async(data)=>{
            await axios.post('http://localhost:8000/api/products', data)
        },
        onSuccess: ()=>{
            alert('them thanh cong')
            navigate('/admin')
        }
    })
    const onHandleSubmit = (data: any)=>{
        mutate(data)
    }
    const Select = React.forwardRef(({ onChange, onBlur, name, label }: any, ref: any) => (
    <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option className='hidden' value="">Select Your Category</option>
            {category?.map((item: ICategory, index: number)=>(
                  <option key={index} value={item._id}>{item.name}</option>
            ))}
        </select>
    </>
    ));
  return (
    <div className='container pt-[25px]'>
        <div className="form_inner">
            <h1 className='text-[2.5rem] text-center'>Add Product</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)} action="">
                <div className="inputType">
                        <label>title</label>
                        <input  type="text" {...register('name')}/>
                </div>
                <div className="inputType">
                            <Select label="Category" {...register("category")}/>
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
                      <button type='submit' className='button'>Add Product</button>
                </div>
            </form>
        </div>
      </div>
  )
}

export default AdminProductAdd
