import { css } from '@emotion/react';
import Link from 'next/link';

type controllerType = {
    moveToToday: () => void;
    moveToBeforeMonth: () => void;
    moveToNextMonth: () => void;
    calendar: Array<number>;
    currentYear: number;
    currentMonth: number;
    currentDate: number;
    currentDay: number;
};

type propType = {
    dateController: controllerType;
};
const wrapped = css`
    border-bottom: 1px solid black;
`;

const navStyle = css`
    display: flex;
    padding: 1rem;
    aling-items: center;
    justify-content: space-between;
`;

const Header = ({ dateController }: propType) => (
    <header css={wrapped}>
        <nav css={navStyle}>
            <h1>
                <Link href="/calendar">우수 캘린더</Link>
            </h1>
            <div>
                <button type="button" onClick={dateController.moveToToday}>
                    오늘
                </button>
                <button type="button" onClick={dateController.moveToBeforeMonth}>
                    이전
                </button>
                <button type="button" onClick={dateController.moveToNextMonth}>
                    이후
                </button>
                {dateController.currentYear}년 {dateController.currentMonth}월
            </div>
            <div>유저 프로필</div>
        </nav>
    </header>
);

export default Header;
