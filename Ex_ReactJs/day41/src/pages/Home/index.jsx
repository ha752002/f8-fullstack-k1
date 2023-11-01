import React, { useState, useEffect, useCallback } from 'react';
import { addTodo, getAllTodoLists, searchTodoLists } from './main';
import TodoItem from '../../components/todoItem';
import { useNavigate } from 'react-router-dom';
import _debounce from 'lodash/debounce';

import Styles from './Home.module.scss';
import { toast } from 'react-toastify';

import clsx from 'clsx';

const Home = ({ toggleLoading }) => {
    const [homeState, setHomeState] = useState({
        todoContent: '',
        listTodo: [],
        isSearching: false,
    });
    const navigate = useNavigate();

    const handleCreateTodo = async () => {
        // e.preventDefault();
        toggleLoading(true);
        console.log(homeState);
        const trimmedTodoContent = homeState.todoContent.trim();
        if (trimmedTodoContent === '') {
            toggleLoading(false);
            toast.warn('Bạn chưa nhập gì.');
        } else {
            const todoContentValue = {
                todo: trimmedTodoContent,
            };
            const dataResponse = await addTodo(todoContentValue);
            toggleLoading(false);

            if (dataResponse && !homeState.isSearching) {
                setHomeState({
                    ...homeState,
                    todoContent: '',
                    listTodo: [dataResponse.data, ...homeState.listTodo],
                });
                toast.success('Thêm 1 todo thành công !');
            } else if (dataResponse && homeState.isSearching) {
                toast.success('Thêm 1 todo thành công !');
                toast.warn('Chế độ Search đã tắt');
                await handleRenderTodo();
            } else {
                navigate('/');
                toast.warn('Vui lòng nhập lại Email');
            }
        }
    };
    const handleContentChange = (e) => {
        setHomeState({
            ...homeState,
            todoContent: e.target.value,
        });

        // console.log(homeState.isSearching);
        if (homeState.isSearching) {
            toggleLoading(true);
            handleSearch(e.target.value);
        }
    };

    const handleRenderTodo = async () => {
        const data = await getAllTodoLists();
        if (data) {
            toggleLoading(false);
            setHomeState({
                ...homeState,
                todoContent: '',
                listTodo: data.listTodo,
                isSearching: false,
            });
        } else {
            console.log(55);
            navigate('/login');
        }
    };

    useEffect(() => {
        toast.success('Chào mừng bạn đã quay trở lại !! ');
        handleRenderTodo();
    }, []);

    const handleDeleteTodo = (id) => {
        setHomeState({
            ...homeState,
            listTodo: homeState.listTodo.filter((todo) => todo._id !== id),
        });
    };

    const handleSearchButton = (e) => {
        setHomeState((prevState) => {
            // console.log(prevState);
            return {
                ...prevState,
                isSearching: true,
            };
        });

        toast.success('Trạng thái Search được bật');
        toggleLoading(true);
        handleSearch(homeState.todoContent);
    };

    const handleSearch = useCallback(
        _debounce((searchString) => {
            console.log(searchString);

            const trimmedTodoContent = searchString.trim();
            searchTodoLists(trimmedTodoContent).then((dataResponse) => {
                // console.log(homeState);
                toggleLoading(false);
                if (dataResponse) {
                    setHomeState((prevState) => {
                        console.log(prevState);
                        return {
                            ...prevState,
                            listTodo: dataResponse.listTodo,
                        };
                    });
                }
            });
        }, 1000),
        [],
    );

    return (
        <>
            <div className={clsx(Styles.todo__app_wrapper)}>
                <h1 className={clsx(Styles.title)}>Welcome to Ha's Todo App exercise!</h1>

                <div className="form-add">
                    <div className="over-lay" />
                    <div className={clsx(Styles.form_add_todos)}>
                        <div className="form-wrapper">
                            <input
                                required=""
                                type="text"
                                value={homeState.todoContent}
                                onChange={handleContentChange}
                                name="input-text"
                                id="input-text"
                                placeholder="Add Todos"
                                className={clsx(Styles.input_add_todos)}
                            />
                        </div>
                        <div className={clsx(Styles.form_btn)}>
                            <button onClick={handleCreateTodo} className={clsx(Styles.btn, Styles.btn_save)}>
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={handleSearchButton}
                                className={clsx(Styles.btn, Styles.btn_search)}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className={clsx(Styles.list_todo)}>
                    <ul className={clsx(Styles.list_todo_group)}>
                        {homeState.listTodo.map((todo) => (
                            <TodoItem
                                toggleLoading={toggleLoading}
                                key={todo._id}
                                todo={todo}
                                onDelete={handleDeleteTodo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home;
