import React from 'react'

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
                <option key={day.getDate()} value={day} selected='selected'>{day.getMonth()}/{day.getDate()}</option>
            ) : (
                <option key={day.getDate()} value={day}  >{day.getMonth()}/{day.getDate()}</option>
            )
        })
        return(
        <select className="form-control" id="exampleFormControlSelect1" onChange={this.props.onChange}>
            ({daysList})
        </select>
        )
    }
}

export default DatePicker