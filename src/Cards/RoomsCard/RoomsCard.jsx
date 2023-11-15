import "./RoomsCard.css";
import { Link } from "react-router-dom";

const RoomsCard = ({ room }) => {
    const { _id, location, title, from, to, price, guests, bedrooms, bathrooms, description, image, host, category } = room
    return (
        <Link to={`room/details/${_id}`} className="roomLink">


            <div className="roomCardContainer">
                <div className="roomImgContainer">
                    <img className="roomImg" src={image} alt="" />
                </div>

                <h1>{title}</h1>
                <h2>{location}</h2>
                <div className="roomInfo">
                    <p>${price} night</p>
                </div>
            </div>

        </Link>
    );
};

export default RoomsCard;