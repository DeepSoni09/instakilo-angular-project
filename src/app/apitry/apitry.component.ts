import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apitry',
  templateUrl: './apitry.component.html',
  styleUrls: ['./apitry.component.css']
})
export class ApitryComponent {
  @Output() transferapimain: EventEmitter<any> = new EventEmitter<any>();
  @Output() transferapipostdata: EventEmitter<any> = new EventEmitter<any>();
  @Output() transferapigetprofile: EventEmitter<any> = new EventEmitter<any>();
  @Output() transferapigetconversation: EventEmitter<any> = new EventEmitter<any>();


  constructor(private http1: HttpClient, private http2: HttpClient, private http3: HttpClient, private http4: HttpClient) { } // Inject the HttpClient
  ngOnInit() {




    const url = 'https://cors-anywhere.herokuapp.com/https://app.smartkeeda.com/demoapi/demo/main';
    const url2 = 'https://cors-anywhere.herokuapp.com/https://app.smartkeeda.com/demoapi/demo/PostData';
    const url3 = 'https://cors-anywhere.herokuapp.com/https://app.smartkeeda.com/demoapi/demo/Getprofile?UserId=1';
    const url4 = 'https://cors-anywhere.herokuapp.com/https://app.smartkeeda.com/demoapi/demo/GetConversation';


    this.http1.post<any>(url, {}).subscribe((response) => {
      this.transferapimain.emit(response);
    },
    );
    this.http2.post<any>(url2, {}).subscribe((response) => {
      this.transferapipostdata.emit(response);
    })
    this.http3.post<any>(url3, {}).subscribe((response) => {
      this.transferapigetprofile.emit(response);
    })
    this.http4.post<any>(url4, {}).subscribe((response) => {
      this.transferapigetconversation.emit(response);
    })
  }


}