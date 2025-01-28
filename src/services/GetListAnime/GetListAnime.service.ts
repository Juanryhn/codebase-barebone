import useFetchQuery from "@/hooks/useFetchQuery"
import { RequestOptionT } from "@/utils/api/types"

export function fetchAnime(){
    const options = {
        url: 'https://dogapi.dog/api/v2/breeds',
        method: 'GET',
        key: 'fetchAnime'
    }
    const { data } = useFetchQuery(options as RequestOptionT);
    return data;
}