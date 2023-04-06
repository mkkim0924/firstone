import './index.scss';

const index = () => {
  return (
    <div className="value-prop-container">
      <figure>
        <img
          src="https://assets.taskrabbit.com/v3/assets/homepage/tasker2-desktop.jpg"
          alt="Tasker"
        />
      </figure>
      <div className="text-container">
        <h2>A go-to team at your fingertips</h2>
        <div className="description">
          Build your team of local, background-checked Taskers to help with —
          and for — life. Whatever you need, they’ve got it covered.
        </div>
        <ul>
          <li>Compare Tasker reviews, ratings, and prices</li>
          <li>Choose and connect with the best person for the job</li>
          <li>Save your favorites to book again and again</li>
        </ul>
      </div>
    </div>
  );
};

export default index;
