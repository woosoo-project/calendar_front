import { useState } from 'react';
import {
    extractDateTime,
    getCurrentCalendar,
    getDayOffsetDateTime,
    getToday
} from 'utils/date';

export const useCalendar = () => {
    const [currentActiveDate, setCurrentActiveDate] = useState(getToday);

    const {
        year: currentYear,
        month: currentMonth,
        date: currentDate,
        day: currentDay
    } = extractDateTime(currentActiveDate);

    const moveToBeforeMonth = () => {
        const beforeMonthDateTime = getDayOffsetDateTime(currentActiveDate, -1);
        setCurrentActiveDate(beforeMonthDateTime);
    };

    const moveToToday = () => {
        setCurrentActiveDate(getToday);
    };

    const moveToNextMonth = () => {
        const nextMonthDateTime = getDayOffsetDateTime(currentActiveDate, 1);
        setCurrentActiveDate(nextMonthDateTime);
    };

    getCurrentCalendar(currentActiveDate);

    return {
        currentYear,
        currentMonth,
        currentDate,
        currentDay,
        moveToBeforeMonth,
        moveToNextMonth,
        moveToToday
    };
};
