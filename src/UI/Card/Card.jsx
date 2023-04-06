import React from 'react';
import { RiPriceTag3Line } from 'react-icons/ri';

import './card.scss';

const Card = () => {
  return (
    <div className="project-card">
      <figure className="card-image">
        <img
          src="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_33-ff031721fe1fd6feeb779c3f4bc64e6384106167f4bead18f1fabeec31c7a3ba.jpg"
          alt="Placeholder image"
        />
      </figure>
      <div className="card-body">
        <figcaption>Furniture Assembly</figcaption>
        <span>
          <RiPriceTag3Line className="d-inline-block ml-1" />
          &nbsp; Avg. Project: $52 - $121
        </span>
      </div>
    </div>
  );
};

export default Card;
