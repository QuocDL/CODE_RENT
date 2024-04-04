import { useProductQuery } from '../../../common/hooks/useProductQuery'
import Role from '../../../components/Role'
import '../../../style/homepage.scss'
import Banner from "./_components/Banner"
import Blog from './_components/Blog'
import News from "./_components/News"
import Shop from './_components/Shop'
const Homepage = () => {


    const {data} = useProductQuery({_limit: 4,_expand:"category"})
    return (
        <>
            <Banner/>
            <News products={data}/>
            <Shop/>
            <Blog/>
            <Role/>
        </>
    )
}

export default Homepage
