import React, { Component } from 'react';
import Style from '../assets/Style.css';
export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            form: {
                doName: '',
                prior: 0,
            },
            msg: '',
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submit");
        const { doName, prior } = this.state.form;
        console.log(doName, prior);
        if (doName !== '') {
            const todo = {
                id: this.state.todoList.length + 1,
                name: doName,
                isCompleted: false,
                prior,
            };
            this.setState({
                todoList: [...this.state.todoList, todo],
                form: { doName: '', prior: 0 },
            });
            //   console.log(this.state.todoList);
        }
    };
    handleChange = (e) => {
        console.log(e.target.name);
        // console.log(e.target.name, e.target.value);
        // const data = { ...this.state.form };
        // data[e.target.name] = e.target.value;
        // this.setState({ form: data });

        this.setState({
            form: { ...this.state.form, [e.target.name]: e.target.value },
        });
    };
    handleCompleted = (id, status) => {
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                if (id === todo.id) {
                    todo.isCompleted = status;
                }
                return todo;
            }),
        });
    };
    render() {
        console.log('re-render');
        const { todoList, form } = this.state;
        const { doName, prior } = form;
        // console.log(todoList);
        return (
            <div>
                <div className="todo">
                    {todoList.map(({ id, name, isCompleted, prior }) => (
                        <div key={id} className={`${isCompleted ? 'completed' : ''}`}>
                            <input
                                type="checkbox"
                                checked={isCompleted}
                                onChange={(e) => {
                                    this.handleCompleted(id, e.target.checked);
                                }}
                            />
                            <span>{name}</span>
                            <small style={{ fontStyle: 'italic', marginLeft: '5px' }}>
                                {+prior === 0 ? 'Không ưu tiên' : 'Ưu tiên'}
                            </small>
                        </div>
                    ))}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <select name="prior" onChange={this.handleChange} value={prior}>
                        <option value="0">Không ưu tiên</option>
                        <option value="1">Ưu tiên</option>
                    </select>
                    <input
                        type="text"
                        placeholder="name..."
                        name="doName"
                        value={doName}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}
