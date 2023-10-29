import React, { useState, useEffect } from 'react';
import { addTodo, getAllTodoLists } from './Home';
import TodoItem from '../../components/todoItem';
import { useNavigate } from 'react-router-dom';
import { escapeOutput } from '../../until/until';

import Styles from './Home.module.scss';
import clsx from 'clsx';
import loading from '../../components/Loading/loading';

const Home = () => {
    let [todoContent, setTodoContent] = useState('');
    let [ListTodo, setListTodo] = useState([]);
    let [visible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleCreateTodo = async (e) => {
        e.preventDefault();
        setIsVisible(true);

        const trimmedTodoContent = todoContent.trim();

        if (trimmedTodoContent === '') {
            setIsVisible(false);
            alert('Bạn chưa nhập gì.');
        } else {
            const escapeOutputResuilt = escapeOutput(trimmedTodoContent);

            const todoContentValue = {
                todo: escapeOutputResuilt,
            };

            const dataResponse = await addTodo(todoContentValue);
            setIsVisible(false);

            if (dataResponse) {
                setTodoContent('');
                setListTodo([dataResponse.data, ...ListTodo]);
                alert('Bạn đã tạo todo thành công');
            } else {
                navigate('/');
                alert('Vui lòng nhập lại Email');
            }
        }
    };

    const handleContentChange = (e) => {
        setTodoContent(e.target.value);
    };

    const handleRenderTodo = async () => {
        const data = await getAllTodoLists();
        if (data) {
            // console.log(2222);
            setListTodo(data.listTodo);
        } else {
            // console.log(3333);
            navigate('/');
        }
    };

    useEffect(() => {
        handleRenderTodo();
    }, []);

    const handleDeleteTodo = (id) => {
        // Xóa todo có ID khớp với id được truyền từ con
        setListTodo((list) => list.filter((todo) => todo._id !== id));
    };

    return (
        <>
            {loading(visible)}
            <div className={clsx(Styles.todo__app_wrapper)}>
                <h1 className={clsx(Styles.title)}>Welcome to Ha's Todo App exercise!</h1>

                <div className="form-add">
                    <div className="over-lay" />
                    <form onSubmit={handleCreateTodo} className={clsx(Styles.form_add_todos)}>
                        <div className="form-wrapper">
                            <input
                                required=""
                                type="text"
                                value={todoContent}
                                onChange={handleContentChange}
                                name="input-text"
                                id="input-text"
                                placeholder="Add Todos"
                                className={clsx(Styles.input_add_todos)}
                            />
                        </div>
                        <div className="form-wrapper">
                            <button className={clsx(Styles.btn, Styles.btn_save)}>Save</button>
                            {/* <button type="button" className="btn btn-cancel">
                                Cancel
                            </button> */}
                        </div>
                    </form>
                </div>
                <div className={clsx(Styles.list_todo)}>
                    <ul className={clsx(Styles.list_todo_group)}>
                        {ListTodo.map((todo) => (
                            <TodoItem key={todo._id} todo={todo} onDelete={handleDeleteTodo} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home;
