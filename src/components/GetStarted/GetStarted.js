import React from 'react';
import './styles.scss';
const GetStarted = () => {
  return (
    <section className="get-started">
      <h2>Ready to get started?</h2>
      <div className="get-started-container">
        <div className="left-container">
          <img
            src="https://assets.taskrabbit.com/v3/assets/homepage/client-sign-up-img.png"
            alt=""
          />
          <p>Hear that? The sweet sigh of relief. Start getting more done.</p>
          <a href="" className="btn-green">
            Sign up
          </a>
        </div>
        <div className="right-container">
          <img
            src="https://assets.taskrabbit.com/v3/assets/homepage/become-a-tasker-img.png"
            alt=""
          />
          <p>Grow your own business while saving the day for busy neighbors.</p>
          <a href="" className="btn-green">
            Become a tutor
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
