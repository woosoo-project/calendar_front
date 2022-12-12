// 날짜는 string 값으로 관리하며, 필요시 Date객체를 만들어서 사용한다.

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

const getMonthOffsetDateTime = (date: string, offset: number) =>
    new Date(
        new Date(date).setMonth(extractDateTime(date).month + offset - 1)
    ).toLocaleDateString();

const getDayOffsetDateTime = (dateTime: string, offset: number) =>
    new Date(
        new Date(dateTime).setDate(extractDateTime(dateTime).date + offset)
    ).toLocaleDateString();

// 첫째주 빈 값 & 막주 빈값 이전 이후 달로 채워야함
const getCurrentCalendar = (currentActiveDate: string) => {
    const { year, month } = extractDateTime(currentActiveDate);

    let calendarInfo: string[] = [];

    const prevLast = new Date(year, month - 1, 0);
    const thisLast = new Date(year, month, 0);

    const prevLastDay = prevLast.getDay();

    const thisLastDate = thisLast.getDate();
    const thisLastDay = thisLast.getDay();

    const prevDates: string[] = [];
    const thisDates: string[] = [];
    const nextDates: string[] = [];

    for (let i = 1; i <= thisLastDate; i += 1) {
        const date = new Date(year, month - 1, i).toLocaleDateString();
        thisDates.push(date);
    }

    // 이전 달의 마지막 날이 토요일이 아닌경우
    if (prevLastDay !== 6) {
        for (let i = 0; i < prevLastDay + 1; i += 1) {
            const date = getDayOffsetDateTime(prevLast.toLocaleDateString(), -i);
            prevDates.unshift(date);
        }
    }
    // 이번달의 마지막 날이 토요일이 아닌경우
    if (thisLastDay !== 6) {
        for (let i = 1; i < 7 - thisLastDay; i += 1) {
            const date = getDayOffsetDateTime(thisLast.toLocaleDateString(), i);
            nextDates.push(date);
        }
    }

    calendarInfo = [...prevDates, ...thisDates, ...nextDates];

    return calendarInfo;
};

export {
    getToday,
    extractDateTime,
    getMonthOffsetDateTime,
    getCurrentCalendar,
    getDayOffsetDateTime
};
