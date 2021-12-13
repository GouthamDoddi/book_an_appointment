import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import DoctorList from './components/doctorList';
import { useDispatch, useSelector } from 'react-redux';
import doctorDate from './config/doctors.json';
import { Button } from '@material-ui/core';
import { bookingData, selectedDoctor } from './redux/actions';
import HistoryTable from './components/historyTable';

import DatePicker from './components/datePicker';

function App() {

    const selectedDoctor = useSelector(state => state.selectedDoctor);
    const [ selectedDate, setSelectedDate ] = useState(new Date());
    const [ patientName, setPatientName ] = useState(false);
    const [ ShowHistory, setShowHistory ] = useState(false);
    const dispatch = useDispatch();

    const bookingDataSelector = useSelector(state => state.bookingData);

    const bookAppointment = () => {
        const data = {
            date: selectedDate,
            doctor: selectedDoctor.name,
            patient: patientName
        };

        // console.log(data);
        // console.log(bookingDataSelector);

        const newData = bookingDataSelector.concat(data);

        dispatch(bookingData(newData));
    }

    const BookButton = () => {

        const bookings = bookingDataSelector.filter(booking => booking.date === selectedDate && booking.doctor === selectedDoctor.name);
        const bookingsLeft = selectedDoctor.available_appointments_per_day - bookings.length
        if (patientName && bookingsLeft) {
            return (
                <Button variant="contained" color="primary" onClick={bookAppointment} style={{ marginTop: 10 }}>
                    Book Appointment
                </Button>
            )
        } else {
            return (
                <Button variant="contained" color="primary" disabled style={{ marginTop: 10 }}>
                    Book Appointment
                </Button>
            )
        }
    }

    const bookingsLeft = () => {
        const bookings = bookingDataSelector.filter(booking => booking.date === selectedDate && booking.doctor === selectedDoctor.name);
        return selectedDoctor.available_appointments_per_day <= bookings.length 
        ? 'No appointments available' 
        : selectedDoctor.available_appointments_per_day - bookings.length;
    }

    const DoctorBookingsHistory = () => {
        const bookings = bookingDataSelector.filter(booking => booking.doctor === selectedDoctor.name);
        return <HistoryTable rows={bookings} />
    };

  return (
    <div className="App">
        <Grid container spacing={3} >
            <Grid item xs={12} md={6}>
                <DoctorList />
            </Grid>
            <Grid item xs={12} md={6}>
                <div className="bookAppointment">
                    {
                        selectedDoctor != undefined 
                    ? <div>
                     <h1>Book Appointment</h1>
                    <h2>doctor Name: { selectedDoctor.name }</h2>
                    <p>doctor Speciality: { selectedDoctor.specialization }</p>
                    <p>Cost of appointment: { selectedDoctor.cost_per_appointment }</p>  

                    {/*  book appointment     */}

                    <div className="bookAppointmentInner" style={{ display: 'inline-grid' }}>

                        <DatePicker />
                        <p> No of appointments left: { bookingsLeft() }</p>
                        <input type="text" placeholder="Patient Name" onChange={(e) => setPatientName(e.target.value)} style={{ margin: 2 }}/>
                        <BookButton />

                    </div>

                    <div className="bookingHistory">
                    {
                        ShowHistory
                        ? <div>
                            <h1>Booking History</h1>
                            <DoctorBookingsHistory />
                            <Button variant="contained" color="primary" onClick={() => setShowHistory(false)} style={{ marginTop: 10 }}> 
                                Hide History
                            </Button>
                        </div>
                        : <Button variant="contained" color="primary" onClick={() => setShowHistory(true)} style={{ marginTop: 10 }}>
                            Show History
                        </Button>

                    }
                    </div>
                    </div>
                    : <div>
                        <h1>Please select a doctor</h1>
                    </div>
                    }


                </div>
            </Grid>              
        </Grid>
    </div>
  );
}

export default App;
