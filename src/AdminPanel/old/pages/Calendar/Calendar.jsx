// import React, { useState } from 'react';
// import Sidebar from '../../components/sidebar/Sidebar';
// import Navbar from '../../components/navbar/Navbar';
// import Datatable from '../../components/datatable/Datatable';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


// ////////////////////////////////
// const CalendarCom = () => {

//     const [date, setDate] = useState(new Date());

//     // console.log(date);

//     const handleDateChange = (newDate) => {
//         setDate(newDate);
//     };

//     return (
//         <>
//             <div className="list">
//                 <Sidebar />
//                 <div className="listContainer">
//                     <Navbar />

//                     <div>
//                         <Calendar
//                             onChange={handleDateChange}
//                             value={date}
//                         />
//                         {/* <p>Selected Date: {date.toDateString()}</p> */}
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default CalendarCom;


import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from '@fullcalendar/core'

import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
// import Header from "../../components/Header";
import { tokens } from "../../theme";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";



////////////////////////////
const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = selected => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }

    const handleEventClick = selected => {
        window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)
            &&
            selected.event.remove()
    }

    return (
        <>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />

                    <div>
                        <Box m="20px">
                            {/* <Header title="Calendar" subtitle="Full Calendar Interactive Page" /> */}

                            <Box display="flex" justifyContent="space-between">
                                {/* CALENDAR SIDEBAR */}
                                <Box
                                    flex="1 1 20%"
                                    backgroundColor={colors.primary[400]}
                                    p="15px"
                                    borderRadius="4px"
                                >
                                    <Typography variant="h5">Events</Typography>
                                    <List>
                                        {currentEvents.map(event => (
                                            <ListItem
                                                key={event.id}
                                                sx={{
                                                    // backgroundColor: colors.greenAccent[500],
                                                    backgroundColor: "#c0c9e4",
                                                    margin: "10px 0",
                                                    borderRadius: "2px",
                                                }}
                                            >
                                                <ListItemText
                                                    primary={event.title}
                                                    secondary={
                                                        <Typography>
                                                            {formatDate(event.start, {
                                                                year: "numeric",
                                                                month: "short",
                                                                day: "numeric",
                                                            })}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>

                                {/* CALENDAR */}
                                <Box flex="1 1 100%" ml="15px">
                                    <FullCalendar
                                        height="75vh"
                                        plugins={[
                                            dayGridPlugin,
                                            timeGridPlugin,
                                            interactionPlugin,
                                            listPlugin,
                                        ]}
                                        headerToolbar={{
                                            left: "prev,next today",
                                            center: "title",
                                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                                        }}
                                        initialView="dayGridMonth"
                                        editable={true}
                                        selectable={true}
                                        selectMirror={true}
                                        dayMaxEvents={true}
                                        select={handleDateClick}
                                        eventClick={handleEventClick}
                                        eventsSet={events => setCurrentEvents(events)}
                                        initialEvents={[
                                            {
                                                id: "12315",
                                                title: "All-day event",
                                                date: "2022-04-14",
                                            },
                                            {
                                                id: "5123",
                                                title: "Timed event",
                                                date: "2022-09-28",
                                            },
                                        ]}
                                    />
                                    <div className="text-xl mt-2 text-gray-500">
                                        <p> * click on a day to create a event * </p>
                                        <p> * click on created event to <span className="text-red-400">delete</span>  it * </p>
                                        <p> * you can change your event's date by dragging * </p>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar;
