import {Component, OnInit} from '@angular/core';
import {GregDateService} from '../../service/greg-date.service';
import {JewishDate} from '../../JewishDate';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  public result: JewishDate = new JewishDate();
  date: any;

  public constructor(
    private service: GregDateService) {
  }

  ngOnInit(): void {
  }

  public convertDate(): void {
    this.service.convert(this.date).subscribe(
      hebrew => {
        this.result = hebrew;
      }
    );
  }
}
