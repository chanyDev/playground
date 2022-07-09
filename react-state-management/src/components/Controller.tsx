import counter from '../store/counter';

const Controller = () => {
  const increase = counter(state => state.increase);
  const decrease = counter(state => state.decrease);
  const reset = counter(state => state.reset);

  return (
    <div>
      <button onClick={increase}>Count Up</button>
      <button onClick={decrease}>Count Down</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Controller;
