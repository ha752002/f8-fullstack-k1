import React, { useState } from 'react';
import clsx from 'clsx';
import Styles from './TodoItem.module.scss';
import { updateTodoList, deleteTodoList } from './main.js';
// import loading from '../../components/Loading/loading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { checkLogin } from '../../services/AuthService';

const TodoItem = ({ todo, onEdit, onDelete, toggleLoading }) => {
    // console.log(todo._id);
    // const [isEditing, setIsEditing] = useState(false);
    // const [todoValue, setTodoValue] = useState(todo.todo);

    const [todoItemState, setTodoItemState] = useState({
        isEditing: false,
        todoValue: todo.todo,
    });

    const navigate = useNavigate();

    const handleEdit = () => {
        setTodoItemState({
            ...todoItemState,
            isEditing: true,
        });
    };

    const handleCancelEdit = () => {
        setTodoItemState({
            ...todoItemState,
            isEditing: false,
            todoValue: todo.todo,
        });
    };

    const handleInputChange = (e) => {
        setTodoItemState({
            ...todoItemState,
            todoValue: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            if (!(await checkLogin())) {
                navigate('/login');
            }
            let todoContent = { todo: todoItemState.todoValue };
            toggleLoading(true);
            const validationResult = await updateTodoList(todo._id, todoContent);
            // console.log(validationResult);
            toggleLoading(false);
            if (validationResult) {
                setTodoItemState({
                    ...todoItemState,
                    isEditing: false,
                    todoValue: validationResult.todo,
                });
            } else {
                setTodoItemState({
                    ...todoItemState,
                    isEditing: false,
                    todoValue: todo.todo,
                });
                navigate('/');
                toast.warning('Vui long nhap lai Email');
            }
        } catch (error) {
            toast.error('Lỗi trong quá trình gọi API:', error);
        }
    };

    const handleDelete = async () => {
        try {
            if (!(await checkLogin())) {
                navigate('/login');
            }
            toggleLoading(true);
            const ResultDeleteTodoList = await deleteTodoList(todo._id);
            toggleLoading(false);

            if (ResultDeleteTodoList) {
                onDelete(todo._id);
            } else {
                toast.warning('Vui long nhap lai Email');
                // alert('Vui long nhap lai Email');
                navigate('/');
            }
        } catch (error) {
            // console.error('Lỗi trong quá trình gọi API:', error);
            toast.error('Lỗi trong quá trình gọi API:', error);

            setTodoItemState({
                ...todoItemState,
                isEditing: false,
            });
        }
    };

    return (
        <>
            <li className={clsx(Styles.list_todo_item)}>
                <input
                    value={todoItemState.todoValue}
                    readOnly={!todoItemState.isEditing}
                    onChange={handleInputChange}
                    className={clsx(Styles.input_todo_item)}
                />
                <div className={clsx(Styles.btn_group)}>
                    <div className="btn_group-left" style={{ display: todoItemState.isEditing ? 'none' : 'block' }}>
                        <button onClick={handleEdit} className={clsx(Styles.save_button, Styles.btn_button)}>
                            edit
                        </button>
                        <button onClick={handleDelete} className={clsx(Styles.delete_button, Styles.btn_button)}>
                            delete
                        </button>
                    </div>
                    <div className="btn_group-right" style={{ display: todoItemState.isEditing ? 'block' : 'none' }}>
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
