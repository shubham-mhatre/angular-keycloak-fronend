import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userRegistrationService:UserRegistrationService) { }

  user = {
    email: '',
    firstName: '',
    lastName: ''
  };

  ngOnInit(): void {
  }

  register() {
    this.userRegistrationService.registerUser(this.user).subscribe(response => {
      console.log("response "+response);
      console.log('User onboarded to application');
    }, error => {
      console.error('Error registering user', error);
    });
  }

}
