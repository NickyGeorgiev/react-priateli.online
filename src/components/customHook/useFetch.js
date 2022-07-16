import { useState, useEffect } from "react";

export const useFetch = () => {
    let [state, setState] = useState([]);
    useEffect(() => {
        fetch("https://parseapi.back4app.com/classes/Menu", {
            method: 'GET',
            headers: {
                "X-Parse-Application-Id": "H6D4cPNXrQlE6Td0u98vAHT4d36CcYbQG9rooOHV",
                "X-Parse-REST-API-Key": "MZnFsyXwYEOVhe4sIiPdn611hVpgTQtuV68Thldj"
            },
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => setState(result.results))
            .catch(error => alert(error));
    }, [])

    return state;
}