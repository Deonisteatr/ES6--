const DAYS = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресение',
};

const getDay = (date) => {
    return DAYS[date.getDay()]
};

export {DAYS, getDay};