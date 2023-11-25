import React from 'react';
import TodoDetail from "@/app/todos/[[...slug]]/TodoDetail";
import {useRouter} from "next/router";
import TodoList from "@/app/todos/TodoList";

const getTodoDetail = async (id:number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return  response.json();
}

const Page = async (props: {
    params: any;
}) => {
    // @ts-ignore
    if(props.params.slug){
        const todoId :number = props.params.slug[0];
        const data = await getTodoDetail(todoId)
        console.log(data)
        return (
            <TodoDetail {...data}/>
        );
    } else{
        return <TodoList/>
    }
};

export default Page;