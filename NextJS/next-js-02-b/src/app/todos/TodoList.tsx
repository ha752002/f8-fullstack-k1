const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
}
const TodoList = async () => {
    const todos = await getTodos();

    return (
        <div>
            {
                todos.map((todo:{id: number})=>{
                    console.log(Object.entries(todo))
                    return (
                        <div key={todo.id}>{Object.entries(todo).map((prop : any) => {
                            console.log(prop)
                            const [key, value] = prop;
                            // eslint-disable-next-line react/jsx-key
                            return <div>{key}: {value}</div>
                        })}</div>
                    )
                })
            }
        </div>
    );
};

export default TodoList;