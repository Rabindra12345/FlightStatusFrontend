import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

interface FlightStatus {
fromAddress: string;
  flightNumber: string;
  toAddress : string;
  departureTime: Date;
  arrivalTime: Date;
  status: string;
}

@Component({
  selector: 'app-flight-status',
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css']
})
export class FlightStatusComponent implements OnInit {
  flightStatus: FlightStatus = {

    toAddress:'',
    flightNumber: '',
    fromAddress: '',
  departureTime: new Date(),
  arrivalTime: new Date(),
  status: 'On Time'
  };

  flightStatuses: FlightStatus[] = [];

  flightNumbers: string[] = [];

    toAddresses: string[] = [];

    fromAddresses: string[] = [];



  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.getFlightStatuses();
    this.getFlightNumbers();
    this.getToAddresses();
    this.getFromAddresses();

  }
  
  getFlightNumbers(): void {
    this.http.get<string[]>('http://localhost:8080/api/flight-numbers').subscribe(
      (data: string[]) => {
        this.flightNumbers = data;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
  

  getToAddresses(): void {
    this.http.get<string[]>('http://localhost:8080/api/toAddress').subscribe(
      (data: string[]) => {
        this.toAddresses = data;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
  getFromAddresses(): void {
    this.http.get<string[]>('http://localhost:8080/api/toAddress').subscribe(
      (data: string[]) => {
        this.fromAddresses = data;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }


  onSubmit() {
    this.http.post<FlightStatus>('http://localhost:8080/api/flight-status', this.flightStatus).subscribe(() => {
      this.getFlightStatuses();
      this.flightStatus = {
        toAddress:'',
        fromAddress:'',
        flightNumber: '',
  departureTime: new Date(),
  arrivalTime: new Date(),
  status: 'On Time'
      };

        // Save flight details to database
      
        // Navigate to FlightDetails component with query parameters
        this.router.navigate(['/flight-details'], { queryParams: { flightNumber: this.flightStatus.flightNumber, departureTime: this.flightStatus.departureTime } });
      
    });
  }

  getFlightStatuses() {
    this.http.get<FlightStatus[]>('http://localhost:8080/api/flight-status').subscribe(data => {
      this.flightStatuses = data;
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
