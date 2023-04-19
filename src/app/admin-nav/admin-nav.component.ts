import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  eligibility = false;
  examEntrance = false;
  jobDetails = false;
  jobEntrance =false;

  constructor() { }

  ngOnInit(): void {
  }

  selectEligibility(){
    this.eligibility = !this.eligibility;
    this.examEntrance = false;
    this.jobDetails = false;
    this.jobEntrance = false;
  }

  selectExamEntrance(){
    this.examEntrance =!this.examEntrance;
    this.eligibility = false;
    this.jobDetails = false;
    this.jobEntrance = false;
  }

  selectJobDetails(){
    this.jobDetails = !this.jobDetails
    this.eligibility = false;
    this.examEntrance = false;
    this.jobEntrance = false;
  }

  selectJobEntrance(){
    this.jobEntrance = !this.jobEntrance;
    this.eligibility = false;
    this.examEntrance = false;
    this.jobDetails = false;
  }

}
