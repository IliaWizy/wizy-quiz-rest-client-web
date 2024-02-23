import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {CheckCircledIcon} from "@radix-ui/react-icons";


interface FormSuccessProps {
    message?: string
}

const FormSuccess = ({message}: FormSuccessProps) => {

    if (!message) return null

    return (
        <Alert className={"border-none bg-emerald-500/15 text-emerald-800"}>
            <CheckCircledIcon className="h-4 w-4"/>
            <AlertTitle>Все отлично!</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}

export default FormSuccess
