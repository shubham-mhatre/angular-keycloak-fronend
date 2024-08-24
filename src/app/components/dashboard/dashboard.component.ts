import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { DashboardData } from 'src/app/interfaces/DashboardData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  totalGroups = 0;
  totalCompanies = 0;
  totalLocations = 0;
  totalBranches = 0;
  totalDivisions = 0;
  totalUsers = 0;

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe((resp: DashboardData) => {
      this.totalGroups = resp.totalNoOfGroups;
      this.totalCompanies = resp.totalNoOfCompany;
      this.totalLocations = resp.totalNoOfLocation;
      this.totalBranches = resp.totalNoOfBranch;
      this.totalDivisions = resp.totalNoOfDivision;
      this.totalUsers = resp.totalNoOfUser;
    });
  }

}
