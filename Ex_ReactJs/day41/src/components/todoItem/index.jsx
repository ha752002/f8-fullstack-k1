import React, { useState } from 'react';
import clsx from 'clsx';
import Styles from './TodoItem.module.scss';
import { updateTodoList, deleteTodoList } from './Todo.js';
import loading from '../../components/Loading/loading';

const TodoItem = ({ todo, onEdit, onDelete }) => {
    // console.log(todo._id);
    const [isEditing, setIsEditing] = useState(false);
    const [todoValue, setTodoValue] = useState(todo.todo);
    let [visible, setIsVisible] = useState(false);
    let [currentTodoValue, setCurrentTodoValue] = useState(todo.todo);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setTodoValue(todo.todo);
        setCurrentTodoValue(todo.todo);
    };

    const handleInputChange = (e) => {
        setTodoValue(e.target.value);
    };

    const handleUpdate = async () => {
        try {
            let todoContent = { todo: 'todoValue' };
            setIsVisible(true);
            const validationResult = await updateTodoList(todo._id, todoContent);
            // console.log(validationResult);
            setIsVisible(false);
            if (validationResult) {
                setCurrentTodoValue(todoValue);
                setIsEditing(false);
            } else {
                setTodoValue(currentTodoValue);
                setIsEditing(false);
            }
        } catch (error) {
            console.error('Lỗi trong quá trình gọi API:', error);
        }
    };

    const handleDelete = async () => {
        try {
            setIsVisible(true);
            const ResultDeleteTodoList = await deleteTodoList(todo._id);
            setIsVisible(false);

            if (ResultDeleteTodoList) {
                onDelete(todo._id);
            } else {
                alert('chua xoa dc');
            }
        } catch (error) {
            console.error('Lỗi trong quá trình gọi API:', error);
            setIsEditing(false);
        }
    };

    return (
        <>
            {loading(visible)}
            <li className={clsx(Styles.list_todo_item)}>
                <input
                    value={todoValue}
                    readOnly={!isEditing}
                    onChange={handleInputChange}
                    className={clsx(Styles.input_todo_item)}
                />
                <div className={clsx(Styles.btn_group)}>
                    <div className="btn_group-left" style={{ display: isEditing ? 'none' : 'block' }}>
                        <button onClick={handleEdit} className={clsx(Styles.save_button, Styles.btn_button)}>
                            edit
                        </button>
                        <button onClick={handleDelete} className={clsx(Styles.delete_button, Styles.btn_button)}>
                            delete
                        </button>
                    </div>
                    <div className="btn_group-right" style={{ display: isEditing ? 'block' : 'none' }}>
                        <button onClick={handleCancelEdit} className={clsx(Styles.cancel_button, Styles.btn_button)}>
                            cancel
                        </button>
                        <button onClick={handleUpdate} className={clsx(Styles.save_button, Styles.btn_button)}>
                            update
                        </button>
                        <button onClick={handleDelete} className={clsx(Styles.delete_button, Styles.btn_button)}>
                            delete
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
};

export default TodoItem;
