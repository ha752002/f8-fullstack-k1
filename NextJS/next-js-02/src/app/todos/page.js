import TodoList from "@/app/todos/TodoList";

export const  metadata = {
    title :"Todo app",
}
const Page = () => {
    return (
        <div>
            <TodoList />
        </div>
    );
};

export default Page;