import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Patient Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <img
                src={review.patientImage}
                alt={review.patientName}
                className="w-10 h-10 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.patientName}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
