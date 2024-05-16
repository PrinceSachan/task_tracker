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
import { MouseEvent } from "react";

export interface Proptypes {
    buttonProps: string;
    titleProps: string;
    lable1: string;
    label2: string;
    val1: string;
    val2: string;
    handleClick?: () => void | MouseEvent<HTMLButtonElement>

}
  
const AlertBox = (props: Proptypes) =>  {

    return (
        <div>
            <div>
                <AlertDialog>
                    <div>
                        <AlertDialogTrigger asChild>
                            <Button onClick={props.handleClick}>{props.buttonProps}</Button>
                        </AlertDialogTrigger>
                    </div>
                    <div>

                    </div>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-xl">{props.titleProps}</AlertDialogTitle>
                            <div>
                                <Label className="font-semibold">{props.lable1}</Label>
                                <AlertDialogDescription className="text-slate-950">{props.val1}</AlertDialogDescription>
                            </div>
                            <div>
                                <Label className="font-semibold">{props.label2}</Label>
                                <AlertDialogDescription className="text-slate-950">{props.val2}</AlertDialogDescription>
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

export default AlertBox;
  