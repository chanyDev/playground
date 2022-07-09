import counter from '../store/counter';

const Counter = () => {
  const count = counter(state => state.count);

  return <p>count: {count}</p>;
};

export default Counter;
