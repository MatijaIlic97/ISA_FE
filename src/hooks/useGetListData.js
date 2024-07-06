import {useCallback, useState} from "react";
import {get} from "@/core/httpClient";

const useGetListData = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    const getData = useCallback(async () => {
        setLoading(true);
        let result = await get(url);
        setData(result.data);
        setLoading(false);
    })

    return {getData, loading, data}
}

export default useGetListData;