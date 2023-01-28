import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDate'
})
export class DatePipe implements PipeTransform {
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  transform(value: Date): string {
    if (!value) { return ''; }
    const today = new Date();
    const inputDate = new Date(value);
    const dayOfWeek = this.days[inputDate.getUTCDay()];
    const dateInterval = today.getTime() - inputDate.getTime();
    const intervalInDays = dateInterval / (1000 * 3600 * 24);

    if (intervalInDays < 1) {
      return inputDate.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' });
    } else if (intervalInDays < 2) {
      return 'Yesterday';
    } else if (intervalInDays < 7) {
      return dayOfWeek;
    } else {
      return inputDate.toLocaleDateString('en-us', { day: '2-digit', month: '2-digit', year: "numeric" });
    }
  }
}
