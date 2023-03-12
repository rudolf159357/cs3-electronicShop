import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private service: GetdataService) { }

  ngOnInit(): void {
    this.service.getTv().subscribe({next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err)
    }});
  }
}
