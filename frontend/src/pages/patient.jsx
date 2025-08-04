import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Patient() {
  const [patientList, setPatientList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    id: null,
    name: '',
    age: '',
    diseases: '',
    pic: ''
  });

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
    const patient = patientList.find(p => p.id === id);
    setEditMode(true);
    setEditData({
      id: patient.id,
      name: patient.name,
      age: patient.age,
      diseases: patient.diseases,
      pic: patient.pic
    });
  }

  function handleChange(e) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/patient/update/${editData.id}/`, editData);
      setEditMode(false);
      getData(); // refresh list
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">This is Patient Card View</h2>
      </section>

      {/* Update Form */}
      {editMode && (
        <form 
          onSubmit={handleSubmit} 
          className="mb-6 p-4 border rounded bg-white shadow-md"
        >
          <h3 className="text-lg font-semibold mb-3">Update Patient</h3>

          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
            placeholder="Name"
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="number"
            name="age"
            value={editData.age}
            onChange={handleChange}
            placeholder="Age"
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="diseases"
            value={editData.diseases}
            onChange={handleChange}
            placeholder="Diseases"
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="pic"
            value={editData.pic}
            onChange={handleChange}
            placeholder="Image URL"
            className="block w-full mb-4 p-2 border rounded"
          />

          <div className="flex space-x-2">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Save
            </button>
            <button 
              onClick={() => setEditMode(false)} 
              type="button" 
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Patient Cards */}
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
