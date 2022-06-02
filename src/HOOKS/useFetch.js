import { useEffect, useState } from "react";

export default function useFetch({ term, location, baseURL }) {
    const [data, setData] = useState([]);
    const [loding, setLoding] = useState(false);
    const [error, setError] = useState(null);
    let params = "";
    let newURL = baseURL;
    if (term && location) {
        params = new URLSearchParams({
            term,
            location,
            limit: 20
        })
        newURL += params;
    }
    const headers = new Headers({
        Authorization: "bearer s1n1zttY6LK2TRV69aNNL6K7qwO8WaaViqMCGb6hodtwLkM28-qDrzinBLcM0MV5reBtRvEA0QIuUa6La2EfPjIsvuRQY78ywGvQxtTmrFII6DoW6VWUIRvlArKNYnYx",
    });
    useEffect(() => {
        try {
            setLoding(true);
            fetch(newURL, {
                headers
            }).then(res => res.json())
                .then((val) => {
                    setData(val.businesses);
                    setLoding(false);
                })
        } catch (e) {
            setLoding(false);
            setError("Error Happened while fetching resturant data");
            return e;
        }
    }, [term, location])
    return [data, loding, error];
}
