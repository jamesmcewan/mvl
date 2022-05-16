import React from 'react';

const Details = ({ creators, title }) => {
  return (
    <div className="px-5 py-5">
      <div>
        <h2 className="mb-3 font-montserrat text-lg font-medium text-stone-800">
          {title}
        </h2>
      </div>
      <ul className="list-none">
        {creators?.items?.map((creator) => (
          <li
            key={`${creator.name}-${creator.role}`}
            className="mb-1 font-montserrat font-light text-stone-800"
          >
            {creator.name} - <em>{creator.role}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
