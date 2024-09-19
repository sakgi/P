// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import ForgotPassword from './pages/ForgotPassword';
// import ChangePassword from './pages/ChangePassword';
// import AdminTickets from './pages/AdminTickets';
// import Tickets from './pages/Tickets'; // Import the child components
// import Engineer from './pages/Engineer';
// import NewTicket from './pages/NewTicket'; 
// // import Reports from './pages/Reports';
// // import Approval from './pages/Approval';
// // import Profile from './pages/Profile';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Login and password routes */}
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/change-password" element={<ChangePassword />} />

//         {/* Admin-related routes */}
//         <Route path="/admin-tickets" element={<AdminTickets />}>
//           <Route path="tickets" element={<Tickets />} />
//           <Route path="new-ticket" element={<NewTicket />} /> {/* Use relative path */}
//           {/* <Route path="engineer" element={<Engineer />} />
//           <Route path="reports" element={<Reports />} />
//           <Route path="approval" element={<Approval />} />
//           <Route path="profile" element={<Profile />} /> */}
//         </Route>

//         {/* Add more routes here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import AdminTickets from './pages/AdminTickets';
import Tickets from './pages/Tickets';
import NewTicket from './pages/NewTicket';
import Engineering from './pages/Engineering';
import AddEngineer from './pages/AddEngineer';
import ReportGeneration from './pages/ReportGeneration';
import Approval from './pages/Approval';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login and password routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Admin-related routes */}
        <Route path="/admin-tickets" element={<AdminTickets />}>

        <Route path="tickets" element={<Tickets />} />
        <Route path="new-ticket" element={<NewTicket />} />
          {/* <Route path="tickets" element={<Tickets />}>
            
          </Route>
          <Route path="new-ticket" element={<NewTicket />} /> */}
          <Route path="engineering" element={<Engineering />} >
          <Route path="add-engineer" element={<AddEngineer />} /> 
          </Route>
          <Route path="report-generation" element={<ReportGeneration />} />
          <Route path="approval" element={<Approval />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
