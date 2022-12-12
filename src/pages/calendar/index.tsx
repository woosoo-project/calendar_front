import { useCalendar } from 'hooks/useCalendar';
import Header from 'layout/header';
import React from 'react';
import { css } from '@emotion/react';
import { extractDateTime } from 'utils/date';

const calendarGridStyle = (rowNum: number) => css`
    display: grid;
    grid-template-columns: repeat(7, calc(100% / 7));
    grid-auto-rows: calc(calc(100vh - 42rem) / ${rowNum});
`;

const Calendar = () => {
    const dateController = useCalendar();
    const rowCount = dateController.calendar.length / 7;

    return (
        <div>
            <Header dateController={dateController} />
            <div css={calendarGridStyle(rowCount)}>
                {dateController.calendar.map((date) => (
                    <div key={date}>{extractDateTime(date).date}</div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
