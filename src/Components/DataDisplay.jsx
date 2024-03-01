import React from 'react';

const DataDisplay = ({ data }) => {
  return (
    <div>
      <h2>Data Display</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default DataDisplay;
