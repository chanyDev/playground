import Counter from './components/Counter';
import Controller from './components/Controller';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
      }}
    >
      <h1>Counter App</h1>
      <Counter />
      <Controller />
    </div>
  );
};

export default App;
