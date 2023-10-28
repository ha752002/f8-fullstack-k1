import React, { useState, useEffect } from 'react';
import { addTodo, getAllTodoLists } from './Home';
import TodoItem from '../../components/todoItem';

import Styles from './Home.module.scss';
import clsx from 'clsx';

const Home = () => {
    let [todoContent, setTodoContent] = useState('');
    let [ListTodo, setListTodo] = useState([]);

    const handleCreateTodo = async (e) => {
        e.preventDefault();
        const todoContentValue = {
            todo: todoContent,
        };

        console.log(todoContentValue);

        await addTodo(todoContentValue).then((dataResponse) => {
            if (dataResponse) {
                setTodoContent('');
                // console.log(dataResponse);
                setListTodo([dataResponse.data, ...ListTodo]);

                // setListTodo(dataResponse.data);
            } else {
                console.log('false');
            }
        });
    };

    const handleContentChange = (e) => {
        setTodoContent(e.target.value);
    };

    const handleRenderTodo = async () => {
        const data = await getAllTodoLists();
        // console.log(data);
        console.log(data);

        setListTodo(data.listTodo);
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
