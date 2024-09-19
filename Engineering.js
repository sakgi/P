import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './Engineering.css'; // Ensure path is correct

function Engineering() {
  const [engineers, setEngineers] = useState([
    { id: 1, Ticketid:1, name: 'John Doe', roll: 'ENG123', status: 'Active' },
    { id: 2, Ticketid:2, name: 'Jane Smith', roll: 'ENG456', status: 'Inactive' },
    { id: 3, Ticketid:3,name: 'Emily Johnson', roll: 'ENG789', status: 'Active' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleAddEngineerClick = () => {
    navigate('add-engineer'); // Adjust this path to your actual route for adding an engineer
  };

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this engineer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the engineer from the state
        const updatedEngineers = engineers.filter(engineer => engineer.id !== id);
        setEngineers(updatedEngineers);

        Swal.fire(
          'Deleted!',
          'The engineer has been deleted.',
          'success'
        );
      }
    });
  };

  const filteredEngineers = engineers.filter(engineer =>
    engineer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="engineering-container">
      <h1>Engineer Management</h1>

      <div className="top-section">
        <button className="add-engineer" onClick={handleAddEngineerClick}>
          Add Engineer
        </button>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-icon">
            <i className="fa fa-search"></i> {/* Font Awesome search icon */}
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="engineering-table">
          <thead>
            <tr>
            <th>Ticket ID</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Status</th>
              <th>Activity</th> {/* Changed from Action to Activity */}
            </tr>
          </thead>
          <tbody>
            {filteredEngineers.map(engineer => (
              <tr key={engineer.id}>
              <td>{engineer.Ticketid}</td>
                <td>{engineer.name}</td>
                <td>{engineer.roll}</td>
                <td>{engineer.status}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteClick(engineer.id)}
                  >
                    Delete Account
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Engineering;
