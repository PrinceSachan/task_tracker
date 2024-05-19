// Imports
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChangeEvent, useState } from "react"
import { task } from "@/api/tasks"

const AddtaskCard = () =>  {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const { createTask } = task()

    const handleSubmit = async() => {
        await createTask(title, description)
        setTitle('')
        setDescription('')
        window.location.reload()
    }
    // setIsCancelled(true)


  return (
    <div>
        <div>
            <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Task
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        Add Task
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="place-content-start">
                            Title
                        </Label>
                        <Input
                            id="title"
                            className="col-span-3"
                            placeholder="Enter you title"
                            value={title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setTitle(e.target.value)
                            }}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="place-content-start">
                            Description
                        </Label>
                        <Textarea 
                            placeholder="Enter your description"
                            className="col-span-3" 
                            value={description}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                setDescription(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose type="submit" onClick={handleSubmit}>Save</DialogClose>
                 
                </DialogFooter>
            </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}
export default AddtaskCard;