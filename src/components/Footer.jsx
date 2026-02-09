import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='py-10 bg-gray-900 '>
      <Container>
        <footer className=" text-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold text-white">MyWebsite</h2>
              <p className="mt-4 text-sm text-gray-400">
                Building modern and responsive web applications with React & Tailwind CSS.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Frontend Projects</li>
                <li>Consultancy</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <p>Email: info@example.com</p>
              <p>Phone: +880 1234-567890</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">GitHub</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>

          </div>

        </footer>
      </Container>
    </div>
  )
}

export default Footer