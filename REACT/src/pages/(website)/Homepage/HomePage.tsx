import Role from "../../../components/Role"
import Banner from "./_components/Banner"
import Blog from "./_components/Blog"
import News from "./_components/News"
import Shop from "./_components/Shop"
import '../../../styles/homepage.scss'
import { useProductQuery } from "../../../common/hooks/useProductQuery"
import { ToastContainer } from "react-toastify"
const HomePage = () => {
const {data} = useProductQuery({_limit: 4, _expand:"category"})

  return (
    <>
      <Banner/>
      <News products={data}/>
      <Shop/>
      <Blog/>
      <Role/>
      <ToastContainer/>
    </>
  )
}

export default HomePage
