import { useEffect, useState } from "react";

export default function useFetchResturant(id) {
    console.log({ id });
    const [data, setData] = useState([]);
    const [loding, setLoding] = useState(false);
    const [error, setError] = useState(null);
    const headers = new Headers({
        Authorization: "bearer s1n1zttY6LK2TRV69aNNL6K7qwO8WaaViqMCGb6hodtwLkM28-qDrzinBLcM0MV5reBtRvEA0QIuUa6La2EfPjIsvuRQY78ywGvQxtTmrFII6DoW6VWUIRvlArKNYnYx",
    });
    const baseUrl = "https://api.yelp.com/v3/businesses/" + id;
    useEffect(() => {
        try {
            setLoding(true);
            fetch(baseUrl, {
                headers
            }).then(res => res.json())
                .then((val) => {
                    setData(val);
                    setLoding(false);
                })
        } catch (e) {
            setLoding(false);
            setError("Error Happened while fetching resturant data");
            return e;
        }
    }, [])
    return [data, loding, error];
}
