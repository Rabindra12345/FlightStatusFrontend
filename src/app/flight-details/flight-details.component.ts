import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

interface FlightStatus {
  fromAddress: string;
  flightNumber: string;
  toAddress: string;
  departureTime: Date;
  arrivalTime: Date;
  status: string;
}

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  showAllStatuses = false;
  flightStatus: FlightStatus = {
    toAddress: '',
    flightNumber: '',
    fromAddress: '',
    departureTime: new Date(),
    arrivalTime: new Date(),
    status: 'On Time'
  };
  flightStatuses: FlightStatus[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getLatestFlightStatus();
    if (this.showAllStatuses) {
      this.getFlightStatuses();
    }
  }

  getLatestFlightStatus(): void {
    this.http.get<FlightStatus>('http://localhost:8080/api/flight-statusByLatest').subscribe(
      data => {
        this.flightStatus = data;
        console.log('Latest flight status:', this.flightStatus);
      },
      error => console.error('Error retrieving latest flight status:', error)
    );
  }

  getFlightStatuses(): void {
    this.http.get<FlightStatus[]>('http://localhost:8080/api/flight-status').subscribe(
      data => {
        this.flightStatuses = data;
        console.log('All flight statuses:', this.flightStatuses);
      },
      error => console.error('Error retrieving all flight statuses:', error)
    );
  }

  toggleShowAllStatuses(): void {
    this.showAllStatuses = !this.showAllStatuses;
    if (this.showAllStatuses) {
      this.getFlightStatuses();
    } else {
      this.flightStatuses = [];
    }
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}