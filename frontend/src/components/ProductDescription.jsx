import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36 '>
          Description
        </button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 '>
          Care Guide
        </button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 '>
          Size Guide
        </button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>
        MERN Stack Ecommerce Website MongoDB, Express, React, Node.js and 
        Tailwind complete CRUD App with ADMIN panel. After downloading, 
        extract the folder and open it in the VS Code editor. Then, install
         Node by running "npm i" in each folder's [frontend, backend, admin] 
         integrated terminal. Also copy the assets from the description of this 
         project's tutorial on YouTube. Copy your own MongoDB connection string 
         (watch tutorial) paste it in backend > index.js file Now, proceed with 
         these steps following the tutorial to practice & learn.... Need help ?
          contact me
        </p>
        <p className='text-sm'>
        MERN Stack Ecommerce Website MongoDB, Express, React, Node.js and Tailwind 
        complete CRUD App with ADMIN panel. After downloading, extract the folder an
        d open it in the VS Code editor. Then, install Node by running "npm i" in ea
        ch folder's [frontend, backend, admin] integrated terminal. Also copy the as
        sets from the description of this project's tutorial on YouTube.
        </p>
      </div>
    </div>
  )
}

export default ProductDescription
