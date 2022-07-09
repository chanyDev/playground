import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface CountState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

const counter = create<CountState>()(
  devtools(set => ({
    count: 0,
    increase: () => set(state => ({ count: state.count + 1 })),
    decrease: () => set(state => ({ count: state.count - 1 })),
    reset: () => set(state => ({ ...state, count: 0 })),
  }))
);

export default counter;
