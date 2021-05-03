
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import qs from 'query-string'

export default function usePagination() {
    const location = useLocation()
    const history = useHistory();

    const [statePage, setStatePage] = useState(pageActual() || 1)


    function pageActual() {
        const params = qs.parse(location.search)
        const page = params.page

        return page
    }

    useEffect(() => {
        const params = qs.parse(location.search)
        history.push({
            search: qs.stringify({
                ...params,
                page: statePage
            })
        })

    }, [statePage])

    return  {
        setStatePage,
        statePage,
    }
}