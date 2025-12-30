import React from 'react';

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light shadow-sm m-2" style={{ width: '345px' }}>
      <img
        src={src}
        alt={title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 60)}</h5>
        <p className="card-text flex-grow-1">{description.slice(0, 100)}</p>
        <a href={url} className="btn btn-danger mt-auto" target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
