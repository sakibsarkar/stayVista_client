import "./RoomDetail.css";
import SetHelmet from "../../SetHelmet";
import UseAxios from "../../hooks/UseAxios";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetail = () => {


    const [isLoading, setIsLoading] = useState(true)
    const [room, setRoom] = useState({})
    const { id } = useParams()
    const axios = UseAxios()
    useEffect(() => {

        axios.get(`/room/${id}`)
            .then(res => {

                setRoom(res.data[0])
                setIsLoading(false)
            })


    }, [axios, id])
    const { _id, ph_id, location, title, from, to, price, guests, bedrooms, bathrooms, description, image, host, category } = room ? room : {}


    return (
        <div>

            <SetHelmet title={title ? title : "Loading"}></SetHelmet>



        </div>
    );
};

export default RoomDetail;

