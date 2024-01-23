import React from 'react'

function Footer() {
  return (
   <>
   <footer className='md:h-[100px] mt-[5px] flex md:items-center md:justify-center px-4 md:px-0'>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-[120px] p-3">
       


        <div>
            <h2 className='font-bold mb-[20px]'>Resources</h2>
            <ul className='grid grid-col gap-[20px] text-sm'>
                <li>About</li>
                <li>Careers</li>
                <li>Support</li>


               
            </ul>
        </div>
      
    </div>

   </footer>
   </>
  )
}

export default Footer