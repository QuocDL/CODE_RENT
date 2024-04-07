/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import {reduce} from 'lodash'
const useCart = () => {
    const queryClient = useQueryClient()
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null;
    const userId = user?._id

    const { data, ...restQuery } = useQuery({
        queryKey: ['cart', userId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8000/api/carts/${userId}`)
            return data
        }
    })

    const { mutate } = useMutation({
        mutationFn: async ({ action, productId, quantity}: { action: string; productId: any, quantity?: number}) => {
            switch (action) {
                case 'INCREMENT':
                    await axios.post(`http://localhost:8000/api/carts/increase`, {
                        userId,
                        productId
                    })
                    break
                case 'DECREMENT':
                    await axios.post(`http://localhost:8000/api/carts/decrease`, {
                        userId,
                        productId
                    })
                    break
                case 'REMOVE':
                    await axios.post(`http://localhost:8000/api/carts/remove`, {
                        userId,
                        productId
                    })
                break
                case "ADDCART":
                    await axios.post(`http://localhost:8000/api/carts/addtocart`, {
                        userId,
                        productId,
                        quantity
                    })
                break
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart', userId]
            })
        }
    })
    const calculateTotal = () => {
        if (!data || !data.products) return 0
        return reduce(data.products, (total: any, product: any) => total + product.price * product.quantity, 0)
    }

    return {
        data,
        mutate,
        calculateTotal,
        ...restQuery
    }
}

export default useCart