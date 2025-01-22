import { Navigate } from "react-router-dom";
import { useQuery} from "@tanstack/react-query";
import { getUser } from "../api/DevTreeAPI.ts";
import DevTree from "../components/DevTree.tsx";

export default function AppLayout() {

    const  {data, isLoading, error, isError} = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 1,
        refetchOnWindowFocus: false
    })
   
    if (isLoading) return <div>Cargando...</div>
    if (isError) return <Navigate to={'/auth/login'} />
    // evita el optinal chaining
    if (data) return <DevTree data={data} />
}