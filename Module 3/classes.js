class CalendarDay{
    #month;
    #day;
    #year;

    constructor(month, day, year){
        this.month = month;
        this.day = day;
        this.year = year;
    }

    toString(){
        return `${this.year}-${this.month+1}-${this.day}`;
    }
}

let day1 = new CalendarDay(2023, 0, 1);
console.log(day1.toString());