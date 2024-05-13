// Imports
import { Trash2} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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


// App imports
import Loader from "./Loader"
import { getTask } from "@/api/tasks"


const TasksBoard = () => {
    const { tasks, loading } = getTask()

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
                            return (
                                <TableBody key={task.id}>
                                    <TableRow>
                                            <TableCell className="hidden sm:table-cell">
                                                <Checkbox id="term" />
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                    {task.title}
                                            </TableCell>
                                            <TableCell className="">
                                                {task.description}
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <Button>View</Button>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                {format((task.createdAt), "dd MMMM yyyy HH:mm:ss", { locale: enIN })}
                                            </TableCell>
                                            <TableCell>
                                                <Button variant={"outline"}><Trash2 size={20} /></Button>
                                            </TableCell>
                                    </TableRow>
                                </TableBody>
                            )
                        })}
                    </Table>
                    </CardContent>
                    <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-5</strong> of <strong>32</strong>{" "}
                        products
                    </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default TasksBoard;