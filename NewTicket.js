import React, { useState } from 'react';
import './NewTicket.css'; // Ensure path is correct

function NewTicket() {
  const [subject, setSubject] = useState('');
  const [onBehalfOf, setOnBehalfOf] = useState('Self');
  const [employeeId, setEmployeeId] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [issueType, setIssueType] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [description, setDescription] = useState('');
  const [formErrors, setFormErrors] = useState('');

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !deviceType || !issueType || !attachment || (onBehalfOf === 'Other Employee' && !employeeId)) {
      setFormErrors('Please fill all the mandatory fields.');
    } else {
      setFormErrors('');
      console.log({
        subject,
        onBehalfOf,
        employeeId: onBehalfOf === 'Other Employee' ? employeeId : 'Self',
        deviceType,
        issueType,
        attachment,
        description
      });
      alert('Ticket raised successfully!');
    }
  };

  return (
    <div className="new-ticket-container">
      {/* Heading is outside the form */}
      <div className="heading-container">
        <h2>Raise New Ticket</h2>
      </div>

      {/* Form starts here */}
      <form onSubmit={handleSubmit} className="ticket-form">
        <div>
          <label>Subject (Mandatory): </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div>
          <label>On Behalf Of (Mandatory): </label>
          <select value={onBehalfOf} onChange={(e) => setOnBehalfOf(e.target.value)}>
            <option value="Self">Self</option>
            <option value="Other Employee">Other Employee</option>
          </select>
        </div>

        {onBehalfOf === 'Other Employee' && (
          <div>
            <label>Enter Employee-ID: </label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required={onBehalfOf === 'Other Employee'}
            />
          </div>
        )}

        <div>
          <label>Device Type (Mandatory): </label>
          <select value={deviceType} onChange={(e) => setDeviceType(e.target.value)} required>
            <option value="">Select Device Type</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Issue Type (Mandatory): </label>
          <select value={issueType} onChange={(e) => setIssueType(e.target.value)} required>
            <option value="">Select Issue Type</option>
            <option value="Software">Software</option>
            <option value="Hardware">Hardware</option>
          </select>
        </div>

        <div>
          <label>Attachment (Mandatory): </label>
          <input type="file" onChange={handleAttachmentChange} required />
        </div>

        <div>
          <label>Description: </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          />
        </div>

        {formErrors && <p style={{ color: 'red' }}>{formErrors}</p>}

        <div>
          <button type="submit">Raise Ticket</button>
        </div>
      </form>
    </div>
  );
}

export default NewTicket;
