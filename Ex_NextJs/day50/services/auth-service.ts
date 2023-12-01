import {NextResponse} from "next/server";
import axios from "axios";
import {apiClient} from "@/services/api";

export const login = async (body: {username: string, password: string})   => {
    return await apiClient.post("/api/auth/login", body);
}
export const register = async (body: {name: string, username: string, password: string})   => {
    return await apiClient.post("/api/auth/register", body);
}
