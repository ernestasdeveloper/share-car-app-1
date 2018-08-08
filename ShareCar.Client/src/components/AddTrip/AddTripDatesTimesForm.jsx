// @flow
import * as React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "../../styles/genericStyles.css";

type AddTripDatesTimesFormProps = {
    fieldValues: {
        route: string,
        dateTime: string,
        driverId: UserId
    },
    nextStep: Function,
    saveValues: Function
};
type AddTripDatesTimesFormState = {
    selectedDate: Date
};


export class AddTripDatesTimesForm extends React.Component<AddTripDatesTimesFormProps, AddTripDatesTimesFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedDate: new Date()
        };
    }
    handleDayClick(day: Date, { selected }) {
        this.setState({
            selectedDate: selected ? undefined : day,
        });
    }
    saveAndContinue(e: any) {
        // e.preventDefault();
        this.state.selectedDate.setHours(e.target.hour.value, e.target.minute.value);
        const payload = {
            route: this.props.fieldValues.route,
            dateTime: this.state.selectedDate.toISOString(),
            driverId: e.target.driverId.value,
            toOffice: this.props.fieldValues.toOffice,
            office: this.props.fieldValues.office
        };
        this.props.saveValues(payload);
        this.props.nextStep();
    }
    render() {
        return(
            <form className="gen-flex-column-container" id="add-trip-dates-times-form" onSubmit={this.saveAndContinue.bind(this)}>
                <DayPicker 
                    className="gen-flex-column-item"
                    selectedDays={this.state.selectedDate}
                    onDayClick={this.handleDayClick.bind(this)}
                />
                <div className="form-group gen-flex-column-item">
                    <label htmlFor="timeOfDay">Time</label>
                    <div className="container gen-flex-row-container">
                        <select type="text" className="form-control gen-flex-row-item" name="hour" defaultValue="08">
                            <option value="00">00</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                        </select>
                        <div id="separator" className="gen-flex-row-item">:</div>
                        <select type="text" className="form-control gen-flex-row-item" name="minute" defaultValue="00">
                            <option value="00">00</option>
                            <option value="05">05</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="35">35</option>
                            <option value="40">40</option>
                            <option value="45">45</option>
                            <option value="50">50</option>
                            <option value="55">55</option>
                        </select>
                    </div>
                </div>
                <div className="form-group gen-flex-column-item">
                    <label htmlFor="driverId">DriverId</label>
                    <input type="number" className="form-control" name="driverId"/>
                </div>
                <button type="submit" className="gen-button">Next</button>
            </form>
        );
    }
}