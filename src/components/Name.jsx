import React from 'react'
import Container from './Container'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Name = () => {
    return (
        <div className='py-7 bg-[#9ea6a2]'>
            <Container>
                <div className="flex items-center">
                    <div className="w-1/7">logo</div>
                    <div className="w-5/7">
                        <div className="text-center">
                            <h1 className='font-POPIN font-bold text-[40px] text-red-400'>
                                At-Tahfiz Wassunnah Madrasah Dhaka
                            </h1>
                        </div>
                    </div>
                    <div className="w-1/7">
                        <div className="">
                            <div className="flex justify-end gap-2.5">
                                <div className="py-2 px-2 bg-amber-300">
                                    <FaFacebookF />
                                </div>
                                <div className="py-2 px-2 bg-amber-300">
                                    <MdEmail />
                                </div>
                                <div className="py-2 px-2 bg-amber-300">
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Name