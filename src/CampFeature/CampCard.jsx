import React from 'react';

const CampCard = ({ camp }) => (
  <div className="camp-card">
    <h3>{camp.title}</h3>
    <p>{camp.description}</p>
    <p>Date: {new Date(camp.date).toLocaleDateString()}</p>
    <p>Location: {camp.location}</p>
    <p>Organizer: {camp.createdBy.name}</p>
  </div>
);

export default CampCard;
