import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  totalGroups = 10; // Replace with actual data
  totalCompanies = 5; // Replace with actual data
  totalLocations = 8; // Replace with actual data
  totalBranches = 3; // Replace with actual data
  totalDivisions = 4; // Replace with actual data
  totalUsers = 50; // Replace with actual data

  ngOnInit(): void {
  }

}
