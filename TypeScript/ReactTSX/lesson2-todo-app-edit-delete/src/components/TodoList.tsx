import React, { useState } from 'react';
import { todoType } from '../todo.model';

interface TodoListProps {
    items: { id: string | number, text: string }[];
    onDeleteTodo: (id: string | number) => void;
    onEditTodo: (id: string | number, update: todoType) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const [editingId, setEditingId] = useState<string | number | null>(null);
    const [editText, setEditText] = useState<string>('');

    const startEdit = (id: string | number, text: string) => {
        setEditingId(id);
        setEditText(text);
    };

    const saveEdit = (id: string | number) => {
        props.onEditTodo(id, { id, text: editText });
        setEditingId(null);
        setEditText('');
    };

    return (
        <div>
            <ul className="list-group">
                {props.items.map((item) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                        {editingId === item.id ? (
                            <input type="text" className="form-control" value={editText} onChange={(e) => setEditText(e.target.value)} />
                        ) : (
                            <div>{item.text}</div>
                        )}
                        <div>
                            {editingId === item.id ? (
                                <>
                                    <button className="btn btn-success mx-2" onClick={() => saveEdit(item.id)}>Save</button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-warning mx-2" onClick={() => startEdit(item.id, item.text)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => props.onDeleteTodo(item.id)}>Delete</button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
