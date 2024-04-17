/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react'
import ActionFillter from './_components/ActionFillter'
import Banner from './_components/Banner'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useProductQuery } from '../../../common/hooks/useProductQuery'
import ProductList from './_components/ProductList'
import Role from '../../../components/Role'
import '../../../styles/shop.scss'
import { ToastContainer } from 'react-toastify'
const ShopPage = () => {
    const [params] = useSearchParams()
    const [limit, setLimit] = useState(4)
    const navigate = useNavigate()
    const page = params.get('page')
    const {data, isLoading} = useProductQuery({_page: page, _limit:limit, _expand: 'category'})
    const handleLimitChange = (e: ChangeEvent<any>)=>{
        setLimit(e.target.value)
        navigate('?page=1')
    }
    const {data: products, pagination} = data || {data: [], pagination: {}}
  return (
    <>
      <Banner/>
      <ActionFillter handleLimitChange={handleLimitChange} pagination={pagination} limit={limit}/>
      {isLoading && <div>Loading......</div>}
      {!isLoading && <ProductList data={products} pagination={pagination}/>}
      <Role/>
      <ToastContainer/>

    </>
  )
}

export default ShopPage
