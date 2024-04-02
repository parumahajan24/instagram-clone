import { useToast } from '@chakra-ui/react'
//  To display a toast notification when an error occurs in the form
const useShowToast = () => {
    const toast = useToast();

    const showToast = (title, description, status) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration: 3000,
            isClosable: true,
        })
    }

    return showToast
}

export default useShowToast