import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <div className='py-11 bg-[#008641]'>
      <Container>
        <div className="">
          <ul className='flex justify-between'>
            <li className='font-POPIN font-bold text-[22px] text-[#ffff] cursor-pointer'>Home</li>
            <li className='font-POPIN font-bold text-[22px] text-[#ffff] cursor-pointer'>About</li>
            <li className='font-POPIN font-bold text-[22px] text-[#ffff] cursor-pointer'>Faculty</li>
            <li className='font-POPIN font-bold text-[22px] text-[#ffff] cursor-pointer'>Admission</li>
            <li className='font-POPIN font-bold text-[22px] text-[#ffff] cursor-pointer'>Gallery</li>
            <li className='font-POPIN font-bold text-[22px] text-[#ffff] cursor-pointer'>Notice</li>
            <li className='font-POPIN font-bold text-[22px] text-[#ffff] cursor-pointer'>contact us</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navbar