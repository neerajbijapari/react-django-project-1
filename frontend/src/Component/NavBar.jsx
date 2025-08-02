import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Users, Shield } from "lucide-react"

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-white to-blue-100 shadow-md border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-blue-600">CureCloud</h2>
          
          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/patients" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                <Users size={18} />
                <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                <Shield size={18} />
                <span>Admin</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}