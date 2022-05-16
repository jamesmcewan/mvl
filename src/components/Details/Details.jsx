import React from 'react';

const Details = ({ creators, title }) => {
  return (
    <div className="px-5 py-5">
      <div>
        <h2 className='text-stone-800 font-montserrat font-medium text-lg mb-3'>{title}</h2>
        </div>
        <ul className='list-none'>
          {creators?.items?.map((creator) => (
            <li key={`${creator.name}-${creator.role}`} className="mb-1 font-montserrat text-stone-800 font-light">
              {creator.name} - <em>{creator.role}</em>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Details;
