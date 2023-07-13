import React from 'react'

function ProductCard() {
  return (
    <div className=' main px-4 flex flex-wrap'>
        <div className='md:w-1/4 w-full p-4'>
            <div className='content bg-green-200 p-4  border-2 border-gray-600 rounded-xl'>
                <img className=' rounded-xl w-full mb-2' src="https://dummyimage.com/720x400" alt=""/>
                <h1 className=' font-bold text-lg'>This is title</h1>
                <h2>dosc</h2>

                <div className='flex justify-between '>
                <button className=' rounded-lg px-5 py-1.5 bg-red-600'>Add to Card</button>
                <button className=' rounded-lg px-5 py-1.5 bg-blue-600'>Buy now</button>
                </div>
            </div>
        </div>
        <div className='md:w-1/4 w-full p-4'>
            <div className='content bg-green-200 p-4  border-2 border-gray-600 rounded-xl'>
                <img className=' rounded-xl w-full mb-2' src="https://dummyimage.com/720x400" alt=""/>
                <h1 className=' font-bold text-lg'>This is title</h1>
                <h2>dosc</h2>

                <div className='flex justify-between '>
                <button className=' rounded-lg px-5 py-1.5 bg-red-600'>Add to Card</button>
                <button className=' rounded-lg px-5 py-1.5 bg-blue-600'>Buy now</button>
                </div>
            </div>
        </div>
        <div className='md:w-1/4 w-full p-4'>
            <div className='content bg-green-200 p-4  border-2 border-gray-600 rounded-xl'>
                <img className=' rounded-xl w-full mb-2' src="https://dummyimage.com/720x400" alt=""/>
                <h1 className=' font-bold text-lg'>This is title</h1>
                <h2>dosc</h2>

                <div className='flex justify-between '>
                <button className=' rounded-lg px-5 py-1.5 bg-red-600'>Add to Card</button>
                <button className=' rounded-lg px-5 py-1.5 bg-blue-600'>Buy now</button>
                </div>
            </div>
        </div>
        <div className='md:w-1/4 w-full p-4'>
            <div className='content bg-green-200 p-4  border-2 border-gray-600 rounded-xl'>
                <img className=' rounded-xl w-full mb-2' src="https://dummyimage.com/720x400" alt=""/>
                <h1 className=' font-bold text-lg'>This is title</h1>
                <h2>dosc</h2>

                <div className='flex justify-between '>
                <button className=' rounded-lg px-5 py-1.5 bg-red-600'>Add to Card</button>
                <button className=' rounded-lg px-5 py-1.5 bg-blue-600'>Buy now</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard;