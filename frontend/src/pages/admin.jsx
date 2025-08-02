import React from 'react';
import axios from 'axios';
import { User, UserCircle } from 'lucide-react';

export default function Admin() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
   const Data = {
  name: form.get("name"),
  pic: form.get("pic"),
  age: parseInt(form.get("age")), 
  diseases: form.get("diseases")
};
await axios.post(
  "http://127.0.0.1:8000/api/patient/create/",
  JSON.stringify(Data), // ✅ convert to JSON string
  {
    headers: {
      "Content-Type": "application/json"
    }
  }
);
  }

  return (
    <div className="max-w-2xl mx-auto p-5 font-sans bg-gray-50 min-h-screen">
      <section className="text-center mb-8 p-5 bg-white rounded-lg shadow-sm">
        <h2 className="text-3xl text-gray-800 mb-3 font-bold">Admin Panel</h2>
        <p className="text-base text-gray-600 m-0">Manage All Your Data From Here....</p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputField icon={<User size={20} />} name="name" placeholder="Patient Name" type="text" />
          <InputField icon={<UserCircle size={20} />} name="pic" placeholder="Patient Pic URL" type="text" />
          <InputField icon={<UserCircle size={20} />} name="age" placeholder="Patient Age" type="number" />

          <label className="flex items-center gap-3 text-sm font-medium text-gray-800">
            <UserCircle size={20} className="text-gray-600 flex-shrink-0" />
            <select 
              name="diseases" 
              defaultValue=""
              className="flex-1 p-3 border-2 border-gray-300 rounded-md text-sm outline-none transition-colors duration-300 focus:border-blue-500"
            >
              <option value="" disabled>Select a disease</option>
              <option value="Cancer">Cancer</option>
              <option value="Heart Disease">Heart Disease</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Other">Other</option>
              <option value="Janleva bimari kuch toh bhi">Janleva bimari kuch toh bhi</option>
            </select>
          </label>

          <button 
            type="submit"
            className="py-4 px-7 bg-blue-600 text-white border-none rounded-md text-base font-semibold cursor-pointer mt-3 transition-colors duration-300 hover:bg-blue-700"
          >
            Add Data
          </button>
        </form>
      </section>
    </div>
  );
}

function InputField({ icon, placeholder, type, name }) {
  return (
    <label className="flex items-center gap-3 text-sm font-medium text-gray-800">
      <span className="text-gray-600 flex-shrink-0">{icon}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="flex-1 p-3 border-2 border-gray-300 rounded-md text-sm outline-none transition-colors duration-300 focus:border-blue-500"
      />
    </label>
  );
}
