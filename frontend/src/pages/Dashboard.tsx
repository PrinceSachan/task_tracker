// Imports
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// App imports
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
        <div className="flex max-h-screen w-full flex-col bg-muted/40">
          <div className="flex flex-col sm:gap-4 sm:py-4 ">
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
