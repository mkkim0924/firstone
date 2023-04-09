import React from 'react';
import { FaAward, FaStar } from 'react-icons/fa';
import { RxCheckCircled } from 'react-icons/rx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../utils/data';
import './styles.scss';

const FeaturedTasker = () => {
  const card = [1, 1, 1, 1].map((e, i) => (
    <div key={i} className="tasker-card">
      <div className="tasker-card-top">
        <div className="tasker-profile-img">
          <img
            src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_130,w_130/v1536956935/rnvgjqb6sedpox1cxkd3.jpg"
            alt=""
          />
        </div>
        <div className="tasker-name">
          <span>Jaffery C.</span>
          <FaAward />
        </div>
        <div className="tasker-history">
          <div className="tasker-reviews">
            <FaStar />
            <span>100% positive reviews</span>
          </div>
          <div className="completed-tasks">
            <RxCheckCircled />
            <span>174 completed tasks</span>
          </div>
        </div>
      </div>
      <div className="tasker-card-center">
        <span className="featured-skills-header">Featured Skills</span>
        <div className="tasker-category">
          <div className="category-name">Help Moving</div>
          <div className="category-price">$52.94/hr</div>
        </div>
        <div className="tasker-category">
          <div className="category-name">Help Moving</div>
          <div className="category-price">$52.94/hr</div>
        </div>
        <div className="tasker-category">
          <div className="category-name">Help Moving</div>
          <div className="category-price">$52.94/hr</div>
        </div>
      </div>
      <div className="tasker-card-bottom">
        <div className="description-header">
          I'm the right person for the job:
        </div>
        <div className="description-text">
          I have supplies and resources available for helping you with your move
          ins, move outs and move aroun...
        </div>
      </div>
    </div>
  ));
  return (
    // <div className="featured-task-container">
    //   <h2>Featured Taskers</h2>
    //   {/* <div className="card-container">{card}</div> */}
    //   <div className="card-container">
    //     <Carousel showDots={true} responsive={responsive}>
    //       {card}
    //     </Carousel>
    //   </div>
    // </div>
    <div className="featured-task-container">
      <h2>Featured Taskers</h2>
      <Carousel showDots={false} responsive={responsive}>
        {card}
      </Carousel>
    </div>
    // <Carousel showDots={false} responsive={responsive}>
    //   {card}
    // </Carousel>
  );
};

export default FeaturedTasker;
