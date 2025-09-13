import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DirectoryPage() {
  const [alumni, setAlumni] = useState([]);
  const [filters, setFilters] = useState({ batch: '', company: '' });

  useEffect(() => {
    async function fetchAlumni() {
      try {
        const res = await axios.get('http://localhost:5000/api/users/alumni', { params: filters });
        setAlumni(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAlumni();
  }, [filters]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Alumni Directory</h2>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Batch/Year"
          value={filters.batch}
          onChange={e => setFilters(f => ({ ...f, batch: e.target.value }))}
          className="border p-2 rounded flex-1"
        />
        <input
          type="text"
          placeholder="Company"
          value={filters.company}
          onChange={e => setFilters(f => ({ ...f, company: e.target.value }))}
          className="border p-2 rounded flex-1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {alumni.map(a => (
          <div key={a._id} className="border rounded p-4 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">{a.name}</h3>
            <p>Batch: {a.batch || 'N/A'}</p>
            <p>Email: {a.email}</p>
            <p>Job Title: {a.jobTitle || 'N/A'}</p>
            <p>Company: {a.company || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}