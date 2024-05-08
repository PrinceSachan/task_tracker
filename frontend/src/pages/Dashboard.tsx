import { PlusCircle } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import TasksBoard from "./TasksBoard";
import AddtaskCard from "./AddtaskCard";

const tableRow = [
  {
      title: 'Do your laundry',
      description: "I'll do laundry at 5pm."
  }
]

export function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 ">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <a href="#">Dashboard</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <a href="#">Tasks</a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Tasks</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Pending</TabsTrigger>
                  <TabsTrigger value="draft">Completed</TabsTrigger>
                </TabsList>
                <div className="ml-auto gap-2">
                  <AddtaskCard />
                </div>
              </div>
              <TabsContent value="all">
                {(tableRow.length == 0)? 
                  <div className="text-xl font-semibold">
                    You don't have any task, create a task by clicking Add Task button
                  </div>
                  : <TasksBoard />
                }
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </>
  )
}
