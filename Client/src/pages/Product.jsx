import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async ()=>{

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])

  return productData ? (
    <div className='boreder-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index)=>(
                <img onClick= {() => setImage(item)} key={index} src={item} alt={productData.title} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className = 'w-full h-auto'src={image} alt="" srcset="" />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency}{productData.price}
          </p>
          <p className='mt-5 text-gray-700 md:w-4/5'>
            {productData.description}
          </p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size:</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-500' : ''}  `} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>COD Available</p>
            <p>Easy Return and Exchange Policy within 7-days</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm '>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quae facere rem laudantium, quia voluptates quaerat distinctio expedita reiciendis voluptatum harum adipisci molestias numquam, ipsam cum? Expedita rerum aperiam modi esse quam nisi sapiente nemo, quae magnam illo, natus optio tenetur minus molestias placeat id quisquam ipsam. Placeat, nesciunt in? Sint itaque repellat asperiores eius consequuntur id? Atque explicabo amet iure sequi dicta asperiores quia non harum. Sunt vitae consequatur molestiae. Deleniti consequatur architecto corporis mollitia adipisci error minima, explicabo iste ipsam dignissimos, atque minus dolor maiores non, dolorem ea ex earum. Ratione, architecto. Cupiditate porro neque fugit magni minima.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis cupiditate nisi tenetur neque facere dignissimos ex quidem maiores, ut cumque similique nulla eum? Nihil dolorum quo provident est impedit distinctio, qui natus commodi deleniti eligendi incidunt aliquam repellendus illum accusamus iure accusantium recusandae. Placeat officiis, dicta hic ad quisquam dignissimos. Consequuntur perferendis, nisi velit vero repudiandae minus in, laboriosam obcaecati distinctio aspernatur totam quisquam minima tenetur nam repellat! Id dolorem voluptas quae odit eaque deserunt culpa eveniet, minus quo est quos ratione, iusto iste fugit natus hic ipsam, placeat perferendis illum commodi? Assumenda, autem praesentium ipsam architecto optio cumque.</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product