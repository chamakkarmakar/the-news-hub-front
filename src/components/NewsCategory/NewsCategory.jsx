import React from 'react'

const NewsCategory = () => {

    return (
        <div className="relative">
            <div className='w-1/4 max-h-screen bg-slate-200 py-7 md:fixed md:top-44 md:left-0 md:right-0 hidden md:block'>
                <h2 className='text-center text-xl font-semibold text-black py-2'>Categories</h2>
                <hr />
                <div className='py-2'>
                    <p className='py-2 pl-7'>Business</p>
                    <hr />
                    <p className='py-2 pl-7'>Entertainment</p>
                    <hr />
                    <p className='py-2 pl-7'>General</p>
                    <hr />
                    <p className='py-2 pl-7'>Health</p>
                    <hr />
                    <p className='py-2 pl-7'>Sports</p>
                    <hr />
                    <p className='py-2 pl-7'>Technology</p>
                    <hr />
                    <p className='py-2 pl-7'>Science</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default NewsCategory
