'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import { Asset } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const[data,setData] = useState(null);

    const fetchBlogData = () =>{
        for (let i = 0; i < blog_data.length; i++) 
            {
                if (Number(params.id)===blog_data[i].id) {
                    setData(blog_data[i]);
                    console.log(blog_data[i]);
                    break;
                }
            }
    }
    useEffect(()=>{
        fetchBlogData();
    },[])

  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href={'/'}>
                <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            </Link>
            
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                Get Started
            <Image src={assets.arrow} alt=''/>
            </button>
        </div>
    
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img}width={60} height={60} alt=''/>
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
       
        </div>

        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100] mb-10'>
            <Image  className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
            <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
            <p>{data.description}</p>
            <h3 className='my-5 text-[18px] font-semibold'>step 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laboriosam!
            </p>
            <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam aut fuga sunt magnam, deleniti dolorem aspernatur! Illo, expedita magnam! Molestias delectus doloribus itaque id, fuga earum corporis eligendi aliquid?   
            </p>

            <h3 className='my-5 text-[18px] font-semibold'>step 2: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laboriosam!
            </p>
            <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum quidem ullam dolorem at, vero totam minus repellendus delectus cupiditate magnam modi quaerat temporibus impedit, optio voluptatem nemo! Excepturi hic fuga ipsum debitis harum distinctio vel? Nam dolorem culpa officia!  
            </p>

            <h3 className='my-5 text-[18px] font-semibold'>step 3: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, laboriosam!
            </p>
            <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam!
            </p>

            <h2 className='my-8 text-[26px] font-semibold'>Conclusion:</h2>
            <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum quidem ullam dolorem at, vero totam minus repellendus delectus cupiditate magnam modi quaerat temporibus impedit, optio voluptatem nemo! Excepturi hic fuga ipsum debitis harum distinctio vel? Nam dolorem culpa officia!  
            </p>

            <div className='my-24'>
                <p className='text-black font font-semibold my-4'>Share this article in social media</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} width={50} alt=''/>
                    <Image src={assets.googleplus_icon} width={50} alt=''/>
                    <Image src={assets.twitter_icon} width={50} alt=''/>

                </div>
            </div>

        </div>
      </div> 
      <Footer/>
    
    </>:<></>
  )
}

export default page
