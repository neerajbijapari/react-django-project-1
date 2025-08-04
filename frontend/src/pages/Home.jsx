import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserPlus, Activity, FileText } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600 mb-4">
            Welcome to CureCloud
          </h1>
          <p className="text-lg text-gray-700">
            Manage your patients efficiently, securely, and intelligently.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard icon={<Users size={28} />} label="Total Patients" value="248" color="blue" />
          <StatCard icon={<Activity size={28} />} label="Active Cases" value="45" color="green" />
          <StatCard icon={<FileText size={28} />} label="Records Today" value="12" color="purple" />
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <ActionCard
            icon={<Users size={40} />}
            title="View Patients"
            description="Browse and manage your patient database. View patient records, medical history, and contact information."
            buttonLabel="View All Patients"
            link="/patients"
            color="blue"
          />
          <ActionCard
            icon={<UserPlus size={40} />}
            title="Add New Patient"
            description="Register a new patient to the system. Add personal information, medical details, and contact data."
            buttonLabel="Add New Patient"
            link="/patients/add"
            color="green"
          />
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            {[
              { label: 'New patient registered: John Smith', time: '2 hours ago', dot: 'bg-green-400' },
              { label: 'Patient record updated: Sarah Johnson', time: '4 hours ago', dot: 'bg-blue-400' },
              { label: 'Medical report generated: Michael Brown', time: '6 hours ago', dot: 'bg-purple-400' },
            ].map((item, index) => (
              <div key={index} className="flex items-start p-5 hover:bg-gray-50 transition">
                <span className={`h-3 w-3 mt-1 rounded-full ${item.dot} mr-4`} />
                <div>
                  <p className="text-gray-800 font-medium">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Stat card component
function StatCard({ icon, label, value, color }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-100',
    green: 'text-green-600 bg-green-100',
    purple: 'text-purple-600 bg-purple-100'
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
      <div className={`p-3 rounded-full ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

// Action card component
function ActionCard({ icon, title, description, buttonLabel, link, color }) {
  const buttonColor = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700'
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
      <div className="mb-4 text-center text-gray-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        to={link}
        className={`inline-block px-6 py-3 text-white rounded-lg font-medium transition-colors ${buttonColor[color]}`}
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
