import { Redirect, useLocation } from "react-router-dom";
import queryString from "query-string";

function OAuth2Handler() {
    const location = useLocation();
    const locationParameters = queryString.parse(location.search);
    localStorage.setItem('parameters', JSON.stringify(locationParameters));
    return (
        <Redirect to="/" />
    )
}

export default OAuth2Handler;