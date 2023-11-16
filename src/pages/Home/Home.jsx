import "./Home.css";
import CategoryCard from "../../Cards/CategoryCard/CategoryCard";
import DataLoading from "../../components/DataLoading/DataLoading";
import RoomsCard from "../../Cards/RoomsCard/RoomsCard";
import SetHelmet from "../../SetHelmet";
import UseAxios from "../../hooks/UseAxios";
import { useEffect, useState } from "react";
import { categories } from "../../../public/category";

const Home = () => {

  const [category, setCategory] = useState("All")
  const [rooms, setRooms] = useState([])
  const axios = UseAxios()
  const [loadingData, setLoadingData] = useState(true)


  useEffect(() => {

    setLoadingData(true)

    axios.get(`/rooms/${category}`)
      .then(res => {
        setRooms(res.data)
        setLoadingData(false)
      })


  }, [category, axios])


  return (
    <div>
      <SetHelmet title={"Vacation Homes & Condo Rentals"}></SetHelmet>


      <div className="categoryContainer">
        {
          categories?.map((data, index) => <CategoryCard setCategory={setCategory} category={category} key={index} icon={data.icon} label={data.label}></CategoryCard>)
        }
      </div>

      {

        loadingData ?

          <DataLoading></DataLoading>


          :

          <div className="roomCards">

            {
              rooms.map(room => <RoomsCard key={room._id} room={room}></RoomsCard>)
            }


          </div>
      }









    </div>
  )
}

export default Home
