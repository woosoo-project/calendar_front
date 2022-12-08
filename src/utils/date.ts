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

const getDayOffsetDateTime = (date: string, offset: number) =>
    new Date(
        new Date(date).setMonth(extractDateTime(date).month + offset - 1)
    ).toLocaleDateString();

// 첫째주 빈 값 & 막주 빈값 이전 이후 달로 채워야함
const getCurrentCalendar = (currentActiveDate: string) => {
    const calendarInfo: string[] = [];

    const { year, month } = extractDateTime(currentActiveDate);

    const firstDate = new Date(year, month + 1, 1).getDate();
    const lastDate = new Date(year, month + 1, 0).getDate();

    console.log(calendarInfo, firstDate, lastDate);
};

export { getToday, extractDateTime, getDayOffsetDateTime, getCurrentCalendar };
