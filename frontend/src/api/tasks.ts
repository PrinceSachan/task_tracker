import axios from "axios"
import { id } from "date-fns/locale";
import { EffectCallback, useCallback, useState } from "react"

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

    // const getTask = async() => {
    //     try {
    //         const res = await axios.get(`http://localhost:8080/api/v1/task/getTask`, {
    //             headers: {
    //                 Authorization: 'Bearer ' + localStorage.getItem('token')
    //             }
    //         })
    //         console.log('Fetched tasks:', res.data.isTask); 
    //         setTasks(res.data.isTask)
    //         setLoading(false)
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }
    const getTask = useCallback(async () => {
        setLoading(true);
        try {
          const res = await axios.get(`http://localhost:8080/api/v1/task/getTask`, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          });
          setTasks(res.data.isTask);  // Ensure this matches your API response
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }, []);
    

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

    const deleteTask = async (id: number) => {
        try {
            const res = await axios.delete(`http://localhost:8080/api/v1/task/deleteTask`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
                data: { id } //ID is wrapped in an object
            });
            await getTask(); 
        } catch (err) {
            console.log(err);
        }
    };

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImlhdCI6MTcxNjEzODcxNn0.oohbFHHDf0MYI58ogSo0VGX6ux1yDnk7nU38snYQ-lQ");

    // const raw = JSON.stringify({
    // "id": id
    // });

    // const requestOptions = {
    // method: "DELETE",
    // headers: myHeaders,
    // body: raw,
    // redirect: "follow"
    // };

    // fetch("http://localhost:8080/api/v1/task/deleteTask", requestOptions)
    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));

    return {
        tasks,
        loading, 
        getTask, 
        createTask,
        updateTask,
        deleteTask
    }
}