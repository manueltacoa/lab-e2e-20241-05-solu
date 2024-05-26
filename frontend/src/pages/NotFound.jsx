import React from 'react'

export const NotFound = () => {
  return (
    <>
      <h1 id='notFound' className='text-2xl'>404 - Page Not Found</h1>
      <button 
        id='historyBack' 
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </>
  )
}
