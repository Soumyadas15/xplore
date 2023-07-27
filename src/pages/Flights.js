import { React, useState } from 'react'
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import '../styles/Flights.css'
import Info2 from '../components/Info2';

function FlightPage() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleOriginChange = (e) => {
        setOrigin(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    const handleDepartureDateChange = (e) => {
        setDepartureDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchFlights();
    };

    const searchFlights = () => {
        setLoading(true);

        setTimeout(() => {
            const mockFlights = [
                { airline: 'Go First', departureTime: '05:30 AM', arrivalTime: '08:30 AM', airlineType: '1 Stop', price: '₹3500' },
                { airline: 'Air India', departureTime: '07:00 AM', arrivalTime: '09:30 AM', airlineType: 'Direct', price: '₹4500' },
                { airline: 'Indigo', departureTime: '10:00 AM', arrivalTime: '12:30 PM', airlineType: 'Direct', price: '₹5000' },
                { airline: 'AirAsia', departureTime: '01:30 PM', arrivalTime: '06:00 PM', airlineType: '2 Stops', price: '₹6500' },
                { airline: 'Vistara', departureTime: '05:00 PM', arrivalTime: '07:30 PM', airlineType: 'Direct', price: '₹8000' },
                { airline: 'SpiceJet', departureTime: '11:00 PM', arrivalTime: '02:30 AM', airlineType: '1 Stop', price: '₹11000' },
            ];

            setFlights(mockFlights);
            setLoading(false);
        }, 2000);
    };
    return (
        <>
        <div>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Helmet>
            <section className="hero">
                <h2>Find the Best Flight Deals</h2>
                <form id="flightSearchForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="origin">Origin</label>
                        <div className="input-group">
                            <i className="input-group-icon fas fa-map-marker-alt"></i>
                            <input type="text" id="origin" placeholder="Enter origin" required value={origin} onChange={handleOriginChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="destination">Destination</label>
                        <div className="input-group">
                            <i className="input-group-icon fas fa-map-marker-alt"></i>
                            <input type="text" id="destination" placeholder="Enter destination" required value={destination} onChange={handleDestinationChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="date-labels">
                            <label htmlFor="departure">Departure Date</label>
                            <label htmlFor="arrival">Arrival Date</label>
                        </div>
                        <div className="input-group input-group-date">
                            <div className="input-group-item">
                                <i className="input-group-icon far fa-calendar-alt"></i>
                                <input type="date" id="departure" placeholder="Select departure date" required value={departureDate} onChange={handleDepartureDateChange} />
                            </div>
                            <div className="input-group-item">
                                <i className="input-group-icon far fa-calendar-alt a1"></i>
                                <input type="date" id="arrival" placeholder="Select arrival date" />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Search Flights</button>
                </form>
            </section>

            <section className="results">
                <div className="container">
                    <h3>Search Results</h3>
                    {loading ? (
                        <p>Loading Search Results...</p>
                    ) : (
                        <div id="searchResults" className="search-results">
                            {flights.map((flight, index) => (
                                <div className="result-item" key={index}>
                                    <div className="flight-info">
                                        <i className="icon fas fa-plane"></i>
                                        <div>
                                            <p className="airline">{flight.airline}</p>
                                            <p className="time">{flight.departureTime} - {flight.arrivalTime}</p>
                                            <p className="time type">{flight.airlineType}</p>
                                        </div>
                                    </div>
                                    <p className="price">{flight.price}</p>
                                    <NavLink to="/book" style={{ textDecoration: "none" }}>
                                        <label class="book-button" target="_blank">Book</label>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
        <Info2/>
        </>
    )
}

export default FlightPage
