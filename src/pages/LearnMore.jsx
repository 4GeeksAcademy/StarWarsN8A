import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";



const LearnMore = () => {
const { type, id } = useParams();
const { data, setData } = useState(null);


useEffect(()=> {
    fetch (`https://www.swapi.tech/api/${type}/${id}/`)
    .then(res =>res.json())
    .then(data => {
        console.log(data);
    });},
    [type, id]);

    if (!data) return <div><h1>Loading... (We're also trying to learn more😅)</h1></div>;

    return (
        <div>
            <h1>{id}</h1>
            <h3>{type.name}</h3>
            <p>{type.description}</p>
           
        </div>
    )
}
export default LearnMore;