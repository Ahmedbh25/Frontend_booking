import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Flight from "./pages/flight/Flight";
import Search from "./pages/search/Search";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hotels from "./pages/hotels/Hotels"
import Rooms from "./pages/rooms/Rooms";
import AllRooms from "./pages/allRooms/AllRooms";
import List from "./pages/list/List";
import HotelReserve from "./pages/hotels_Reseve/HotelReserve";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import Rating from "./pages/rating/Rating";
import Contact from "./pages/contact/Contact";

//<Route path="/hotels" element={<Hotels />} />

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/rating" element={<Rating />} />
        <Route path="/hotels_list" element={<List />} />
        <Route path="/hotel/:hotelID" element={<HotelReserve />} />

        <Route path="/hotels/:City" element={<Hotels />} />
        <Route path="/hotel/room_types/:hotelID" element={<Rooms />} />
        <Route path="/hotel/room_types/:hotelID/:roomID" element={<AllRooms />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/flights" element={<Flight />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;