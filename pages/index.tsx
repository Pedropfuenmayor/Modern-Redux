import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { increment } from "../features/counter/counterSlice";


export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();


  const handelClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      {count}
      <button onClick={handelClick}>Button</button>
    </div>
  );
}
