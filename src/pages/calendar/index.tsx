import { useCalendar } from 'hooks/useCalendar';
import React from 'react';

const Calendar = () => {
    const dateController = useCalendar();

    return (
        <div>
            <header>
                <button type="button" onClick={dateController.moveToBeforeMonth}>
                    이전
                </button>
                <button type="button" onClick={dateController.moveToNextMonth}>
                    이후
                </button>
                {dateController.currentYear}년 {dateController.currentMonth}월
            </header>
        </div>
    );
};

export default Calendar;