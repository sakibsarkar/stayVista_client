import "./RoomDetail.css";
import SetHelmet from "../../SetHelmet";
import UseAxios from "../../hooks/UseAxios";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
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

    console.log(from, to);

    const selectionRange = {
        startDate: new Date(!isLoading && from),
        endDate: new Date(!isLoading && to),
        key: 'selection',
    }

    return (
        <div className="roomDetailContainer">
            <div className="roomDetailsHeading">
                <h1>{title}</h1>
                <p>{location}</p>
            </div>

            <div className="roomBigImg">
                <img src={image} alt="" />
            </div>


            <div className="roomInfoWrapper">


                <div className="roomDetailsHolder">

                    <div className="hostBox">
                        <p>Hosted by {host?.name}</p>
                        <div className="hostImgBox">
                            <img src={host?.image} alt="" />
                        </div>
                    </div>


                    <div className="roomCapacity">
                        <p>Guest {guests}</p>
                        <p>Bedroom {bedrooms}</p>
                        <p>Bathroom {bathrooms}</p>
                    </div>


                    <div className="roomDescription">
                        <p>{description}</p>
                    </div>


                </div>

                <div className="roomBookCalender">

                    <p><span>${price}</span> night</p>

                    <DateRangePicker
                        ranges={[selectionRange]}
                        rangeColors={['#f43f5e']}
                        showDateDisplay={false}
                        direction="vertical"

                    />
                    <div className="reserveBtn">
                        <button >Reserve</button>
                    </div>

                    <div className="reserveTotal">
                        <p>Total</p>
                        <p>${price}</p>
                    </div>
                </div>

            </div>

            <SetHelmet title={title ? title : "Loading"}></SetHelmet>
        </div>
    );
};

export default RoomDetail;

