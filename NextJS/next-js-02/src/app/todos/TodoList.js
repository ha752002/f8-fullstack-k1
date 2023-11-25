const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return response.json();
}

const TodoList = async () => {

    const todos = await getTodos();
    return (
        <div>
            <h1>Todos App</h1>
            {
                todos.map(({id, title}) => (<h3 key={id}>{title}</h3>))
            }
        </div>
    );
};

export default TodoList;