import Store from '../store/index';
// import { Provider } from 'react-redux';

const Covid_19 = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Covid_19 App</h1>
      <p>{Store}</p>
    </div>
  )
};

export default Covid_19;