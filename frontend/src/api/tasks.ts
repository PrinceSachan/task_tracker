import axios from "axios"
import { tr } from "date-fns/locale";
import { title } from "process";
import { useEffect, useState } from "react"

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
    tasks: TasksProps[] | undefined;
    loading: boolean;
    getTask: () => void;
    createTask: () => void
}

export function task() {
    const [tasks, setTasks] = useState<TasksProps []>();
    const [loading, setLoading] = useState<boolean>();

    const getTask = async() => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/task/getTask`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            if(res){
                // console.log(res)
                setTasks(res.data.isTask)
                setLoading(false)
            } else {
                setLoading(true)
            }
            // console.log(tasks);
            // console.log(loading)
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
            if(res) {
                await getTask()
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    return {
        tasks,
        loading, 
        getTask, 
        createTask
    }
}