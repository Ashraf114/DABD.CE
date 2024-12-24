import React, { useState } from 'react';

function DataSubmissionForm() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventLocation: '',
    eventDates: '',
    eventLink: '',
    media: null,
    affiliations: '',
    partnerships: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, media: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    // Submit to API here using Axios
    console.log('Form submitted', formData);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Data Submission Form</h2>
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label className="form-label">Event Name</label>
          <input
            type="text"
            name="eventName"
            className="form-control"
            placeholder="Enter event name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Location</label>
          <input
            type="text"
            name="eventLocation"
            className="form-control"
            placeholder="Enter event location"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Dates</label>
          <input
            type="date"
            name="eventDates"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Link</label>
          <input
            type="url"
            name="eventLink"
            className="form-control"
            placeholder="Enter event link"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Media</label>
          <input
            type="file"
            name="media"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Affiliations</label>
          <input
            type="text"
            name="affiliations"
            className="form-control"
            placeholder="Enter affiliations"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Partnerships</label>
          <input
            type="text"
            name="partnerships"
            className="form-control"
            placeholder="Enter partnerships"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="4"
            placeholder="Enter event description"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DataSubmissionForm;
