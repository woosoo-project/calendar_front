import { useState } from 'react';
import {
    extractDateTime,
    getCurrentCalendar,
    getMonthOffsetDateTime,
    getToday
} from 'utils/date';

export const useCalendar = () => {
    const [currentActiveDate, setCurrentActiveDate] = useState(getToday);
    const [calendar, setCalendar] = useState(getCurrentCalendar(currentActiveDate));
    const {
        year: currentYear,
        month: currentMonth,
        date: currentDate,
        day: currentDay
    } = extractDateTime(currentActiveDate);

    const moveToBeforeMonth = () => {
        const beforeMonthDateTime = getMonthOffsetDateTime(currentActiveDate, -1);
        setCurrentActiveDate(beforeMonthDateTime);
        setCalendar(getCurrentCalendar(beforeMonthDateTime));
    };

    const moveToToday = () => {
        setCurrentActiveDate(getToday);
        setCalendar(getCurrentCalendar(getToday));
    };

    const moveToNextMonth = () => {
        const nextMonthDateTime = getMonthOffsetDateTime(currentActiveDate, 1);
        setCurrentActiveDate(nextMonthDateTime);
        setCalendar(getCurrentCalendar(nextMonthDateTime));
    };

    return {
        calendar,
        currentYear,
        currentMonth,
        currentDate,
        currentDay,
        moveToBeforeMonth,
        moveToNextMonth,
        moveToToday
    };
};
