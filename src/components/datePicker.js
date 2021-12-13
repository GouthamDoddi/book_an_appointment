import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        style={{ marginLeft: 'auto' }}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        KeyboardButtonProps={{
            'aria-label': 'change date',
        }}
        />  
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;