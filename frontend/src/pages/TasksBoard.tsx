// Imports
import { Trash2} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { format } from 'date-fns'
import { enIN } from "date-fns/locale";
import { MouseEventHandler, useEffect } from "react"


// App imports
import Loader from "./Loader"
import { task } from "@/api/tasks"
import AlertBox from "./Alertbox"

const TasksBoard = () => {
    const { tasks, loading, getTask, updateTask, deleteTask } = task();

    const length = tasks?.length
   
    useEffect(() => {
        const fetchTask =  async() =>  {
            await getTask()
        }
        fetchTask()
    }, [length])

    function handleClick() {
        console.log('first')
    }

    // async function handleDelete(id: number): Promise<any>{
    //     await deleteTask(id)
    // }

    console.log("tasks",tasks)
    console.log("loading",loading)
    
    if(tasks?.length === 0) return <div className="font-semibold text-xl">You don't have any task, Create a task by clicking on Add Task button</div>
    
    if(loading) return <Loader />

    return (
        // <div className="h-screen">
            <>
                <Card x-chunk="dashboard-06-chunk-0">
                    <CardHeader>
                    <CardTitle>Tasks</CardTitle>
                    <CardDescription>
                        Plan and track your day
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    Done
                                </TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Details
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Created at
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                            </TableHeader>
                            {tasks && tasks.map((task) => {
                                // console.log(task.id)
                                return (
                                    <TableBody key={task.id}>
                                        <TableRow>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Checkbox id="term" checked={task.done} onCheckedChange={async() =>{ await updateTask(task.id), window.location.reload()}} />
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                        {task.title}
                                                </TableCell>
                                                <TableCell className="">
                                                    {
                                                        task.description.length > 30 ? 
                                                        `${task.description.substring(0, 30)}...` : `${task.description}`
                                                    }
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    <AlertBox 
                                                        buttonProps="View"
                                                        titleProps="Task"
                                                        lable1="Title"
                                                        label2="Description"
                                                        val1={task.title}  
                                                        val2={task.description} 
                                                        handleClick={handleClick}
                                                    />
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    {format((task.createdAt), "dd MMMM yyyy HH:mm:ss", { locale: enIN })}
                                                </TableCell>
                                                 <TableCell>
                                                    <Trash2 size={20} onClick={async() =>{ console.log('Delete_Id:', task.id),  await deleteTask(task.id)}} />
                                                </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )
                            })}
                        </Table>
                    </CardContent>
                </Card>
            </>
        // </div>
    )
}

export default TasksBoard;