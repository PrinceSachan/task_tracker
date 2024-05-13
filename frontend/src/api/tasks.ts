import axios from "axios"
import { useEffect, useState } from "react"

export type TasksProps = {
    createdAt: string | number;
    description: string;
    done: boolean;
    id: number;
    title: string;
}

export const getTask = () => {
    const [tasks, setTasks] = useState<TasksProps []>();
    const [loading, setLoading] = useState<boolean>(true);

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
                    if(res) {
                        setTasks(res.data.isTask)
                    }
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
            }
    
            return () => { isCancelled = true }
        }, [])

    return {
        tasks, 
        loading,
    }
}