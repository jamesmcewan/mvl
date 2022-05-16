import React from 'react';

const Details = ({ creators, title }) => {
  return (
    <div className="px-5 py-5">
      <div className="prose prose-zinc xl:prose-sm">
        <h2>{title}</h2>
        <ul>
          {creators?.items?.map((creator) => (
            <li key={`${creator.name}-${creator.role}`}>
              {creator.name} - <em>{creator.role}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
