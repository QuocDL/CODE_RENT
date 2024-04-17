/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useCategoryQuery } from '../../../../common/hooks/useCategoryQuery';
import { useProductQuery } from '../../../../common/hooks/useProductQuery';
import '../../../../styles/form.scss'
import { Button, Form, Input, Select, Upload, Flex, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { ICategory } from '../../../../common/interfaces/Category';
import { UploadOutlined } from '@ant-design/icons';
import uploadToCloudinary from '../../../../common/lib/utils';
import useProductMutation from '../../../../common/hooks/useProductMutation';



const AdminFormProduct = () => {
    const {id} = useParams()
    const [form] = Form.useForm() 
    const {mutate} = useProductMutation({
        action: id ? "UPDATE" : "CREATE",
        id: id
    })
    const onSubmitHandle = async()=>{
      if(!id){
          try {
            const values = await form.validateFields()
            const gallary = values.gallary.map((item: any) => item.response)
            const image = values.image[0].response
            mutate({...values, gallary, image})
        } catch (error) {
            const values = await form.validateFields()
            const gallary = values.gallary.map((item: any) => item.response || item.url)
            const image = values.image[0].response
            mutate({...values, gallary, image})
        }
      }else{
         try {
            const values = await form.validateFields()
            const newGallary = values.gallary.map((item: any) => item.response)
            const newImage = values.image[0].response
            mutate({...values, gallary: newGallary, image: newImage})
        } catch (error) {
            console.log(error)
        }
      }
    }      
   const {data: product} = useProductQuery({id,})
  useEffect(() => {
    console.log(product)
        if (!id) return;
        if (product) {
            form.setFieldsValue({
                ...product,
                category: product?.category?._id,
                image: [{ uid: '-1', name: 'image.png', status: 'done', url: product?.image }],
                gallary: product?.gallary?.map((url: string, index: number) => ({
                    uid: String(index),
                    name: `image-${index}.png`,
                    status: 'done',
                    url: url
                }))
            })
        }
    }, [id, form, product])
    const {data: category} = useCategoryQuery()
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
  return (
   <>
    <div className='ml-[15%] pt-[25px]'>
        <div className="flex">
          <div className="w-[682px]">
            <h1 className='text-[2.5rem] text-center'>{id?"Update Product": "Add Product"}</h1>
              <Form form={form} onFinish={onSubmitHandle}
            layout='vertical'
            >
                    <Form.Item label="Product Name"  name="name"  rules={[{ required: true, message: 'Bạn chưa nhập tên sản phẩm!' }]}>
                        <Input/>
                    </Form.Item>
                     <Form.Item label="Category"  name="category"  rules={[{ required: true, message: 'Bạn chưa chọn danh mục!' }]}>
                         <Select>
                            {category?.map((item: ICategory, index: number)=>(
                                <Select.Option key={index} value={item._id}>{item.name}</Select.Option>
                            ))}
                         </Select>
                    </Form.Item>
                      <Flex gap="middle" justify='space-between' align="start">
                         <Col span={8}>
                            <Form.Item valuePropName={"fileList"} getValueFromEvent={normFile} name='image' rules={[{required: true, message: "Bạn chưa tải ảnh lên!"}]}>
                                <Upload  listType='picture' customRequest={uploadToCloudinary as any}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item valuePropName={"fileList"} getValueFromEvent={normFile} name='gallary' rules={[{required: true, message: "Bạn chưa tải ảnh lên!"}]}>
                                <Upload  multiple={true} listType='picture'  customRequest={uploadToCloudinary as any}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                      </Flex>
                        <Form.Item label="Price"  name="price"  rules={[{ required: true, message: 'Bạn chưa nhập giá tiền!' }]}>
                            <Input/>
                        </Form.Item>        
                    <Form.Item className='flex justify-center'>
                        <Button  type="primary" htmlType="submit">
                            Tải sản phẩm lên
                        </Button>
                    </Form.Item>
            </Form>
          </div>
        </div>
      </div>
</>
  )
}

export default AdminFormProduct
