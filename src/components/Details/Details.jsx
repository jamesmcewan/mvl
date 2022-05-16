import React from 'react';

const Details = ({ creators, title }) => {
  return (
    <div className="px-5 py-5">
      <div>
        <h2 className='text-stone-800 font-bold text-lg mb-3'>{title}</h2>
        </div>
        <ul className='list-none'>
          {creators?.items?.map((creator) => (
            <li key={`${creator.name}-${creator.role}`} className="mb-1">
              {creator.name} - <em>{creator.role}</em>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Details;
