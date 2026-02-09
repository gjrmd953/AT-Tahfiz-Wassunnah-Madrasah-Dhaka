import React from 'react'
import Container from './Container'
import MainImg from "../assets/img.png"

const Navbar = () => {
  return (
    <div className='py-11 bg bg-[#363938]'>
      <Container>
        <div className="items-center">
          <ul className='flex justify-between items-center'>
            <li className='font-POPIN font-bold text-[22px] text-[#000000] cursor-pointer'>Home</li>
            <li className='font-POPIN font-bold text-[22px] text-[#000000] cursor-pointer'>About</li>
            <li className='font-POPIN font-bold text-[22px] text-[#000000] cursor-pointer'>Faculty</li>
            <li className='font-POPIN font-bold text-[22px] text-[#000000] cursor-pointer'>Admission</li>
            <li className='font-POPIN font-bold text-[22px] text-[#000000] cursor-pointer'>Gallery</li>
            <li className='font-POPIN font-bold text-[22px] text-[#000000] cursor-pointer'>Notice</li>
            <li className='font-POPIN font-bold text-[22px] text-[#ffff] cursor-pointer py-2 px-5 bg-amber-400'>contact us</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navbar