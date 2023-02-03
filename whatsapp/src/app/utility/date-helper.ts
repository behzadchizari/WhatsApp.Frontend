export class DateHelper {
    static addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);

        return date;
    }

    static addHours(date: Date, hours: number): Date {
        date.setHours(date.getHours() + hours);

        return date;
    }
}