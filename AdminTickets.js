import React, { useState } from 'react';
import { FaBars, FaTicketAlt, FaUsers, FaFileAlt, FaCheckCircle, FaUserCircle } from 'react-icons/fa'; 
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import './AdminTickets.css';

// Sidebar component
function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <Link to="tickets"> {/* Remove /admin-tickets prefix */}
            <FaTicketAlt className="icon" />
            <span>Tickets</span>
          </Link>
        </li>
        <li>
          <Link to="engineering"> {/* Remove /admin-tickets prefix */}
            <FaUsers className="icon" />
            <span>Engineer</span>
          </Link>
        </li>
        <li>
          <Link to="report-generation"> {/* Remove /admin-tickets prefix */}
            <FaFileAlt className="icon" />
            <span>Report Generation</span>
          </Link>
        </li>
        <li>
          <Link to="approval"> {/* Remove /admin-tickets prefix */}
            <FaCheckCircle className="icon" />
            <span>Approval</span>
          </Link>
        </li>
        <li className="profile">
          <Link to="profile"> {/* Remove /admin-tickets prefix */}
            <FaUserCircle className="icon" />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

// Main Admin Layout Component
function AdminTickets() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-tickets-container">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Outlet /> {/* Render nested routes */}
      </div>
    </div>
  );
}

export default AdminTickets;
