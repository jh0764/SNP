import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendarr.css'


function Calendarr() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value}  locale="en-EN"/>
        </div>
    );
}

export default Calendarr;