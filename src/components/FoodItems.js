import React from 'react'
import { useValues } from '../Context/ContextProvider'

export default function MainContent() {

  const { windowInnerWidth } = useValues()

  return (
    // <div className='container-fluid' style={{minHeight: '100vh'}}>
    //   <div className='row'>
    //     <div className={`col-auto ${windowInnerWidth < 500 ? 'position-fixed bottom-0 start-0 end-0 text-bg-dark' : 'position-fixed px-0 d-flex flex-column bg-dark'}`} style={windowInnerWidth > 500 ? {height: '100%'} : {} }>
    //       <a className='text-decoration-none btn btn-lg px-4 py-3 btn-dark w-100' href='#'>Biryani</a>
    //       <a className='text-decoration-none btn btn-lg px-4 py-3 btn-dark w-100' href='#'>Chicken</a>
    //       <a className='text-decoration-none btn btn-lg px-4 btn-dark w-100' href='#'>Paneer</a>
    //       <a className='text-decoration-none btn btn-lg px-4 btn-dark w-100' href='#'>Vegetable</a>
    //       <a className='text-decoration-none btn btn-lg px-4 btn-dark w-100' href='#'>Chinese</a>
    //       <a className='text-decoration-none btn btn-lg px-4 btn-dark w-100' href='#'>South Indian</a>
    //     </div>
    //     <div className='col'>
        
    //     </div>
    //   </div>
    // </div>
    <>
      <div className='position-fixed bottom-0 start-0 end-0 d-flex justify-content-between'>
        <a>Biryani</a>
        <a>Biryani</a>
        <a>Biryani</a>
        <a>Biryani</a>
        <a>Biryani</a>
        <a>Biryani</a>
      </div>
      <div></div>
    </>
  )
}