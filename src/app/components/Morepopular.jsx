import React from 'react'
import PostCat from './PostCat'


const Morepopular = () => {
    return (
        <section className='w-full py-8'>
            <div className='w-full space-y-4'>
                <h3 className='text-xl font-bold'>popular</h3>
                <PostCat />
                <button className='text-skin'>
                    load more
                </button>
            </div>
        </section>
      )
}

export default Morepopular