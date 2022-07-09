import counter from '../store/counter';

const Controller = () => {
  const { increase, decrease, reset } = counter(state => state);

  return (
    <div>
      <button onClick={increase}>Count Up</button>
      <button onClick={decrease}>Count Down</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Controller;
