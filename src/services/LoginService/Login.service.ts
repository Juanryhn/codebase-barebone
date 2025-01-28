import useMutateQuery from "@/hooks/useMutateQuery";
import { RequestOptionT } from "@/utils/api/types";

export const login = () => {
    const options = {
        url: '/ahuy',
        method: 'POST',
        key: 'login'
    };
    const data = useMutateQuery(options as RequestOptionT)
    console.log('login',data)
    return data
}