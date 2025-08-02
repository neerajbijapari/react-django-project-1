import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Patient() {
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/patient/list/');
      setPatientList(res.data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this patient?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/patient/delete/${id}/`);
      setPatientList(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  }

  function handleUpdate(id) {
    // You can implement actual update logic here (e.g. show form, navigate, etc.)
    alert(`Update clicked for patient ID: ${id}`);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">This is Patient Card View</h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patientList.map((e) => (
          <div key={e.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <img 
                src={e.pic} 
                alt={e.name} 
                className="w-24 h-24 rounded-md object-cover border border-gray-200"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{e.name}</h2>
                <h5 className="text-base text-gray-600 mb-2">Age: {e.age}</h5>
                <p className="text-gray-700 mb-3">Disease: {e.diseases}</p>

                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleUpdate(e.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Update
                  </button>
                  <button 
                    onClick={() => handleDelete(e.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
