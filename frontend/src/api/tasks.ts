import axios from "axios"
import { EffectCallback, useState } from "react"

export type TasksProps = {
    createdAt: string | number;
    description: string;
    done: boolean;
    id: number;
    title: string;
}

export interface CreateTaskProps {
    title: string;
    description: string;
}

export type GetTaskReturn = {
    tasks: TasksProps[];
    loading: boolean;
    getTask: () => void | EffectCallback;
    createTask: () => void;
    updateTask: () => void;
    deleteTask: () => void;
}

export function task() {
    const [tasks, setTasks] = useState<TasksProps[]>();
    const [loading, setLoading] = useState<boolean>(true);

    const getTask = async() => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/task/getTask`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            setTasks(res.data.isTask)
            setLoading(false)
        }
        catch(err) {
            console.log(err)
        }
    }

    const createTask = async(title: string, description: string) => {
        try{
            const res = await axios.post(`http://localhost:8080/api/v1/task/createTask`, {
                title,
                description
            },{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            await getTask()
        }
        catch(err) {
            console.log(err)
        }
    }

    const updateTask = async(id: number) => {
        try {
            const res = await axios.put(`http://localhost:8080/api/v1/task/updateTask`, {
                id
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            })
            await getTask()
        }
        catch(err) {
            console.log(err)
        }
    }

    const deleteTask = async(id: number) => {
        try{
            const res = await axios.delete(`http://localhost:8080/api/v1/task/deleteTask`,{ data: id, 
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            await getTask()
        }   
        catch (err) {
            console.log(err)
        }
    }

    return {
        tasks,
        loading, 
        getTask, 
        createTask,
        updateTask,
        deleteTask
    }
}