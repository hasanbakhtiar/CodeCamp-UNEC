import React, { useRef } from 'react'
import Swal from 'sweetalert2';

interface addTodoType {
    onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<addTodoType> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const formSubmited = (e: React.FormEvent) => {
        e.preventDefault();
        const text = inputRef.current!.value;

        if (!text) {
            Swal.fire({
                title: "Please Fill Input!",
                icon: "warning"
            });
        } else {
            props.onAddTodo(text);
            inputRef.current!.value = "";
        }
    }
    return (
        <div>
            <form onSubmit={formSubmited}>
                <div className="input-group mb-3">
                    <input ref={inputRef} type="text" className="form-control" placeholder="Enter Tasks" />
                    <button className="btn btn-dark" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TodoInput