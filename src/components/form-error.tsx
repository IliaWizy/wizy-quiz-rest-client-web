import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {RocketIcon} from "@radix-ui/react-icons";


interface FormErrorProps {
    message?: string
}

const FormError = ({message}: FormErrorProps) => {

    if (!message) return null

    return (
        <Alert className={"border-none bg-destructive/15 text-red-800"}>
            <RocketIcon className="h-4 w-4"/>
            <AlertTitle>Прилетело НЛО!</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}

export default FormError
