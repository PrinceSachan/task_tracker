import { MoreHorizontal} from "lucide-react"
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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const TasksBoard = () => {
    
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
                                Start Task
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Time Taken
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Created at
                            </TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        <TableRow>
                            <TableCell className="hidden sm:table-cell">
                                <Checkbox id="term" />
                            </TableCell>
                            <TableCell className="font-medium">
                                Work on project
                            </TableCell>
                            <TableCell>
                                <ul>
                                    <li>
                                        complete dashboard part
                                    </li>
                                    <li>
                                        learn about AWS or google cloud
                                    </li>
                                </ul>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Button>Start</Button>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                --
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                2024-05-09 10:42 AM
                            </TableCell>
                            <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            </TableCell>
                        </TableRow>

                        </TableBody>
                    </Table>
                    </CardContent>
                    <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        products
                    </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default TasksBoard;