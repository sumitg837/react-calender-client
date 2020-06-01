import React from 'react'
import events from './event'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { confirmAlert } from 'react-confirm-alert'; // Import

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import './App.css'



const globalizeLocalizer = momentLocalizer(moment)



const DragAndDropCalendar = withDragAndDrop(Calendar)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events,
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

  }

  showEvent = (event) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='event-detail'>
            <p className="close" onClick={() => {
              onClose();
            }}>✕</p>
            <div className="event-body">
              <h1>{event.title}</h1>
              <h5>
                {moment(event.start).format('dddd')},&nbsp;
                {moment(event.start).format('MMM Do')}&nbsp;at&nbsp;
                {moment(event.start).format('LT')}
              </h5>
              <p className="repeat-text">↻ Repeats every day</p>
              <div className="event-action">
                <button className="re-schedule"><FontAwesomeIcon icon={faCalendar} />&nbsp; Reschedule</button>
                <button onClick={onClose} className="cancle"><FontAwesomeIcon icon={faTimesCircle}/>&nbsp; Cancle</button>
              </div>
            </div>
          </div>
        );
      }
    });
  }
  handleSelect = ({ start, end }) => {
    
  }

  render() {
    return (
      <DragAndDropCalendar
        selectable="ignoreEvents"
        step={60}
        timeslots={1}
        localizer={globalizeLocalizer}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        onEventResize={this.resizeEvent}
        onSelectSlot={this.handleSelect}
        onDragStart={console.log}
        defaultView={Views.WEEK}
        defaultDate={new Date()}
        onSelectEvent={event => this.showEvent(event)}
      />
    )
  }
}

export default App
