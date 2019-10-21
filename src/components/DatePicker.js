import React from 'react'
import '../css/DatePicker.css'

const months_en = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

class DatePicker extends React.Component{

    constructor(props){
        super(props)
        var days = []
        this.state = {
            today: new Date(),
            days: days
        }
        for (var i = -3;i<4;i++){
            var nextDay = new Date(this.state.today);
            nextDay.setDate(this.state.today.getDate()+i);
            days.push(nextDay)
        }
        this.state.days = days
    }


    render(){
        var daysList = this.state.days.map(day => {
            return day.getDate() === this.state.today.getDate() ? (
                <option key={day.getDate()} value={day} selected='selected'>{months_en[day.getMonth()]} {day.getDate()} (today)</option>
            ) : (
                <option key={day.getDate()} value={day}>{months_en[day.getMonth()]} {day.getDate()}</option>
            )
        })
        return(
        <div className="date-box">
            Date:&nbsp;
            <select className="date-dropdown" id="exampleFormControlSelect1" onChange={this.props.onChange}>
                ({daysList})
            </select>
        </div>
       
        )
    }
}

export default DatePicker