'use client'
import React, { useState } from 'react';
import Papa from 'papaparse';

function FileUpload() {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;
      // Parse CSV data
      const parsedCsvData = await parseCsvData(text);
      setCsvData(parsedCsvData);
    };

    reader.readAsText(file);
  };

  const parseCsvData = (text) => {
    return new Promise((resolve, reject) => {
      // Using PapaParse to parse CSV
      Papa.parse(text, {
        complete: (result) => {
          resolve(result.data);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <h2>Uploaded CSV Data:</h2>
      <ul>
        {csvData.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileUpload;
