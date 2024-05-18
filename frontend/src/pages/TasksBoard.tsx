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
import { useCallback, useEffect } from "react"


// App imports
import Loader from "./Loader"
import { task } from "@/api/tasks"
import AlertBox from "./Alertbox"

const TasksBoard = () => {
    const { tasks, loading, getTask, updateTask, deleteTask } = task();

   
    // useEffect(() => {
    //     const fetchTask =  async() =>  {
    //         // let isCancelled = false;
    //         await getTask()
    //     }
        
    //     fetchTask()
    //     // if(isCancelled == false){
    //     //     getTask()
    //     // }
    //     // return () => { isCancelled = true }
    // }, [])

    // const memotask = useCallback(() => {
    //     getTask()
    // }, [])


    
    // function checkedHandler() {
    //     updateTask()
    // }
    function handleClick() {
        console.log('first')
    }

    if(tasks?.length == 0) return <div className="font-semibold text-xl">You don't have any task, Create a task by clicking on Add Task button</div>

    if(loading) return <Loader />

    return (
        <div>
            <div>
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
                                                    <Checkbox id="term" checked={task.done} onCheckedChange={() => updateTask(task.id)} />
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
                                                    <Button variant={"outline"} onClick={() => deleteTask(task.id)}><Trash2 size={20} /></Button>
                                                </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )
                            })}
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default TasksBoard;