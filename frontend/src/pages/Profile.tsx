// Imports
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label"

type ProfileProps = {
    user: {
        name: string;
        email: string;
    }
}
  
const Profile = ({user}: ProfileProps) =>  {

    return (
        <div>
            <div>
                <AlertDialog>
                    <div>
                        <AlertDialogTrigger asChild>
                            <Button>Show Profile</Button>
                        </AlertDialogTrigger>
                    </div>
                    <div>

                    </div>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-xl">Profile</AlertDialogTitle>
                            <div>
                                <Label className="font-semibold">Name</Label>
                                <AlertDialogDescription className="text-slate-950">{user.name}</AlertDialogDescription>
                            </div>
                            <div>
                                <Label className="font-semibold">Email</Label>
                                <AlertDialogDescription className="text-slate-950">{user.email}</AlertDialogDescription>
                            </div>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Back</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
}

export default Profile;
  