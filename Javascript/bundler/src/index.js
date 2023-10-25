import dotenv from "dotenv";
dotenv.config()
import { App } from "./App";

const root = document.querySelector('#root');
// console.log(root);
root.innerHTML = App();