import {  useNavigate, useSearchParams } from 'react-router-dom'
import Role from '../../../components/Role'
import '../../../style/shop.scss'
import ActionFillter from './_components/ActionFillter'
import Banner from './_components/Banner'
import { ChangeEvent, useState } from 'react'
import { useProductQuery } from '../../../common/hooks/useProductQuery'
import ProductList from './_components/ProductList'

const Shoppage = () => {
    const [params] = useSearchParams()
    const page = params.get('page')
    const navigate = useNavigate()
    const [limit, setLimit] = useState(2)
    const {data, isLoading} = useProductQuery({_page: page, _limit: limit,})

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        </>
    )
}
export default Shoppage

