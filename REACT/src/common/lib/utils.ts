
import axios from 'axios'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const convertCurrency = new Intl.NumberFormat('vi-VN',{
    style: 'currency',
    currency: 'VND'
})


interface UploadOptions {
  onSuccess: (url: string) => void;
  onError: (error: { event: Error }, file: File) => void;
  file: File;
}

const uploadToCloudinary = async (options : UploadOptions) => {
    const { onSuccess, onError, file } = options;
  
    const formData = new FormData();
   formData.append("file", file)
    formData.append("upload_preset", "upload_preset")
    formData.append('folder', 'react_local')
  
    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dpplfiyki/upload', formData, {
      });
  
      onSuccess(res.data.url);
    } catch (error) {
      onError({ event :error as Error }, file);
    }
  };
  

export default uploadToCloudinary;




      