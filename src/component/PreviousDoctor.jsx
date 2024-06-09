import React, { useState } from 'react';

const PreviousDoctor = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // You can implement the logic for file upload here
    console.log('Date:', date);
    console.log('Description:', description);
    console.log('File:', file);
    // Reset the state after upload
    setDate('');
    setDescription('');
    setFile(null);
  };

  return (
    
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Upload File</h2>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
          <input
            type="text"
            id="date"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">Select File</label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => document.getElementById('file').click()}
          >
            Choose File
          </button>
          {file && <span className="ml-2">{file.name}</span>}
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default PreviousDoctor;