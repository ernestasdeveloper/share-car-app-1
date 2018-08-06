// @flow
import * as React from "react";
import type {TripService} from "../../api/TripService";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";
import "../../styles/TripSearchForm.css";
import "../../styles/genericStyles.css";

type TripSearchFormProps = {
    tripService: TripService
};
type TripSearchFormState = {
    selectedDay: Date
};


export class TripSearchForm extends React.Component<TripSearchFormProps, TripSearchFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedDay: new Date()
        };
    }
    handleDayClick(day: Date, { selected }) {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    }
    // async handleSubmit(e: any) {
    //     e.preventDefault();
    //     const payload = {
    //         dateTime: this.state.selectedDay
    //                         .toISOString(),
    //     };
    //     console.log(payload.dateTime);
    //     await this.props.tripService.add(payload);
    // }
    render(){
        return(
            // <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="trip-search-container">
                <DayPicker className="trip-search-child"
                    selectedDays={this.state.selectedDay}
                    onDayClick={this.handleDayClick.bind(this)}
                />
                { console.log("selectedDay sliced "+ this.state.selectedDay.toISOString().slice(0, 10)) }
                <Link to={"/trips/" + this.state.selectedDay.toISOString().slice(0, 10)}><button className="gen-button">Search</button></Link>
                <Link to="/trips"><button className="gen-button">View all</button></Link>
            </div>
            // </form>
        );
    }
}