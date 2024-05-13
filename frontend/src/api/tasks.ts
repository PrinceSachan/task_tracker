import axios from "axios"
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

export const getTask = () => {
    const [tasks, setTasks] = useState<TasksProps []>();
    const [loading, setLoading] = useState<boolean>(true);
    const [id, setId] = useState<number | undefined>()

        useEffect(() => {
            let isCancelled = false;
            if(isCancelled == false){
                setLoading(true)
                axios.get(`http://localhost:8080/api/v1/task/getTask`, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(res => {
                    if(res.data.isTask !== null) {
                        setTasks(res.data.isTask)
                        console.log('Task length:', tasks?.length)
                    }
                    console.log('Task length:', tasks?.length)
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setLoading(false),
                    console.log('Task length:', tasks?.length)
                })
            }
    
            return () => { isCancelled = true }
        }, [])

    return {
        tasks, 
        loading,
    }
}

export const createTask = async(title: string, description: string): Promise<void> => {
    // const [loading, setLoading] = useState<boolean>()
    await axios.post(`http://localhost:8080/api/v1/task/createTask`, {
        title,
        description
    },{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}