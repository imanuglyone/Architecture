const DaysUntilNewYear = () => {
    const now = new Date();
    
    const nextYear = now.getFullYear() + 1;

    const newYearDate = new Date(nextYear, 0, 1);

    const TimeDiff = newYearDate - now;

    const DaysRem = Math.ceil(TimeDiff / (1000 * 60 * 60 *24));

    console.log('До нового года осталось ' + DaysRem + ' дней!');
};

DaysUntilNewYear();