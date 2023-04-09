import './index.scss';

// import image1 from '../../assets/image1.png';
const index = () => {
  return (
    <div className="value-prop-container">
      <div className="text-container">
        <h2>Everyday life made easier</h2>
        <div className="description">
          When life gets busy, you don’t have to tackle it alone. Get time back
          for what you love without breaking the bank.
        </div>
        <ul>
          <li>Choose your Tasker by reviews, skills, and price</li>
          <li>Schedule when it works for you — as early as today</li>
          <li>Chat, pay, tip, and review all through one platform</li>
        </ul>
      </div>
      <figure>
        <img
          src="https://assets.taskrabbit.com/v3/assets/homepage/tasker1-desktop.jpg"
          alt="Tasker"
        />
      </figure>
    </div>
  );
};

export default index;
