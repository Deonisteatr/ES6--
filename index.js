import {DAYS, getDay} from './format.js';

const currentDate = new Date();


document.write(`Сегодня ${getDay(currentDate)}`);