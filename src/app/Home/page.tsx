import React from 'react'
import Search from '../components/Search/search'

export const Home = () => {
  return (
    <main className='relative flex items-start justify-end h-full overflow-hidden'>
      <img src="/images/background.png" alt='GitHub Logo' className='absolute inset-0 h-full object-cover'/>
      <div className='w-3/4 mr-14'>
        <Search/>
      </div>
    </main>
  )
}
