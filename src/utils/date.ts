// 날짜는 string 값으로 관리하며, 필요시 Date객체를 만들어서 사용한다.

import { range } from './common';

const getToday = new Date().toLocaleDateString();

const extractDateTime = (date: string) => {
    const dateTimeObject = new Date(date);

    return {
        year: dateTimeObject.getFullYear(),
        month: dateTimeObject.getMonth() + 1,
        date: dateTimeObject.getDate(),
        day: dateTimeObject.getDay()
    };
};

const getDayOffsetDateTime = (date: string, offset: number) =>
    new Date(
        new Date(date).setMonth(extractDateTime(date).month + offset - 1)
    ).toLocaleDateString();

// 첫째주 빈 값 & 막주 빈값 이전 이후 달로 채워야함
const getCurrentCalendar = (currentActiveDate: string) => {
    let calendarInfo: number[] = [];

    const { year, month } = extractDateTime(currentActiveDate);

    const prevLast = new Date(year, month - 1, 0);
    const thisLast = new Date(year, month, 0);

    const prevLastDate = prevLast.getDate();
    const prevLastDay = prevLast.getDay();

    const thisLastDate = thisLast.getDate();
    const thisLastDay = thisLast.getDay();

    const prevDates: number[] = [];
    const thisDates: number[] = [...range(1, thisLastDate)];
    const nextDates: number[] = [];

    // 이전 달의 마지막 날이 토요일이 아닌경우
    if (prevLastDay !== 6) {
        for (let i = 0; i < prevLastDay + 1; i += 1) {
            prevDates.unshift(prevLastDate - i);
        }
    }
    // 이번달의 마지막 날이 토요일이 아닌경우
    if (thisLastDay !== 6) {
        for (let i = 1; i < 7 - thisLastDay; i += 1) {
            nextDates.push(i);
        }
    }

    calendarInfo = [...prevDates, ...thisDates, ...nextDates];

    return calendarInfo;
};

export { getToday, extractDateTime, getDayOffsetDateTime, getCurrentCalendar };
