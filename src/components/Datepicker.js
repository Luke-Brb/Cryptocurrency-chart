import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
}) {
  const [startDateState, setStartDateState] = useState(startDate);
  const [endDateState, setEndDateState] = useState(endDate);

  function handleStartDateChange(date) {
    setStartDateState(date);
    onChangeStartDate(date);
  }

  function handleEndDateChange(date) {
    setEndDateState(date);
    onChangeEndDate(date);
  }

  return (
    <>
      <DatePicker
        selected={startDateState}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDateState}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDateState}
        endDate={endDateState}
        minDate={startDateState}
      />
    </>
  );
}

export default Datepicker;
