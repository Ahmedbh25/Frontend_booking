import React from 'react'
import { Link } from "react-router-dom";
import "./searchItem.css";
import hotel1 from '../../images/hotels/hotel1.jpeg';
import hotel2 from '../../images/hotels/hotel2.jpeg';
import hotel3 from '../../images/hotels/hotel3.jpg';
import hotel4 from '../../images/hotels/hotel4.jpeg';
import hotel5 from '../../images/hotels/hotel5.jpeg';
import hotel6 from '../../images/hotels/hotel6.jpeg';
import hotel7 from '../../images/hotels/hotel7.jpeg';

const hotels = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7];

function SearchItem({ item, index }) {
  return (
    <div className="searchItem">
      <img src={hotels[index]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle"> <Link to={`/hotel/${item._id}`} style={{textDecoration:"none"}}>{item.name}</Link></h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siSubtitle">
          City : {item.city}
        </span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siTaxiOp">Free airport taxi</span>

        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating.number}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
          <Link to={`/hotel/room_types/${item._id}`} style={{textDecoration:"none", color:"brown", fontWeight:"bold", marginTop:10}}>Show Rooms</Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem