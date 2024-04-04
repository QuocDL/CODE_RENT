// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { IProduct } from '../common/interfaces/IProduct'
// import '../style/Admin.scss'
// // import { useMutation } from "@tanstack/react-query";
// // import { IProduct } from "../interfaces/product";
// const AdminList = () => {
//     const [products, setProducts] = useState<IProduct[]>([])
//     const fetchProduct = async () => {
//         const { data } = await axios.get('http://localhost:8000/api/products')
//         setProducts(data)
//     }
//     useEffect(() => {
//         fetchProduct()
//     }, [])
//     const onHandleRemove = async (id: any) => {
//         if (confirm('Are you sure to delete?')) {
//             try {
//                 await axios.delete(`http://localhost:8000/api/products/${id}`)
//                 fetchProduct()
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }
    
//     return (
//         <>
//             <div className="container">
//                 <div className="admin_list_inner">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Product Name</th>
//                                 <th>Image</th>
//                                 <th>Category</th>
//                                 <th>Price</th>
//                                 <th>Oldprice</th>
//                                 <th>  <Link className='addnew' to={`addproduct`}>
//                                     Add New Product
//                                 </Link></th>
//                             </tr>
//                         </thead>
//                         <thead></thead>
//                         <tbody>
//                             {products.map((item: IProduct, index: number) => (
//                                 <tr key={index}>
//                                     <td >{index + 1}</td>
//                                     <td style={{ fontWeight: 'bold' }}>{item.title}</td>
//                                     <td><img src={item.image} width={50} alt="" /></td>
//                                     <td style={{ color: '#9F9F9F' }}>{item.category}</td>
//                                     <td>{item.price}</td>
//                                     <td>{item.oldprice || item.price}</td>
//                                     <td>
//                                         <div className="action_table">
//                                             <button onClick={() => onHandleRemove(item._id)}>Delete</button>
//                                             <Link to={`edit/${item._id}`}>Edit</Link>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <table></table>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AdminList

