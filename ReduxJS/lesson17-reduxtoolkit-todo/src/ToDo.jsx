import {useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {add} from './tools/slices/todoSlice';
const ToDo = () => {
  let data = useSelector((p) => p.todo);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const formSubmit = (e)=>{
    e.preventDefault();
    if (!inputRef.current.value) {
      window.alert('please fill input');
    } else {
      dispatch(add(inputRef.current.value));
     inputRef.current.value = "";
      console.log(data)
    }
    
  }
  return (
    <div>
    <form onSubmit={formSubmit}>
    <input ref={inputRef} type="text" /><button>add</button>
    </form>
      <ul>
        {data.map((item) => <li key={item.id}>{item.title}</li>).reverse()}
      </ul>
    </div>
  );
};

export default ToDo;
