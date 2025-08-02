import React from 'react'
import { Link } from 'react-router-dom'
import { Users, UserPlus, Activity, FileText } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to CureCloud
          </h1>
          <p className="text-xl text-gray-600">
            Manage your patients efficiently and securely
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Patients</p>
                <p className="text-2xl font-bold text-gray-900">248</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Cases</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Records Today</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* View Patients */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="p-8 text-center">
              <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">View Patients</h3>
              <p className="text-gray-600 mb-6">
                Browse and manage your patient database. View patient records, medical history, and contact information.
              </p>
              <Link 
                to="/patients"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Users className="h-5 w-5 mr-2" />
                View All Patients
              </Link>
            </div>
          </div>

          {/* Add Patient */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="p-8 text-center">
              <UserPlus className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Add New Patient</h3>
              <p className="text-gray-600 mb-6">
                Register a new patient to the system. Add personal information, medical details, and contact data.
              </p>
              <Link 
                to="/patients/add"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Add New Patient
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="h-2 w-2 bg-green-400 rounded-full mr-4"></div>
                  <div>
                    <p className="font-medium text-gray-900">New patient registered: John Smith</p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mr-4"></div>
                  <div>
                    <p className="font-medium text-gray-900">Patient record updated: Sarah Johnson</p>
                    <p className="text-sm text-gray-600">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="h-2 w-2 bg-purple-400 rounded-full mr-4"></div>
                  <div>
                    <p className="font-medium text-gray-900">Medical report generated for Michael Brown</p>
                    <p className="text-sm text-gray-600">6 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}