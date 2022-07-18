import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

  constructor(private profileService: ProfileService, private user: User) { }

  ngOnInit(): void {

  }
  getProfileById(id: number){
    this.profileService.getProfileById(id).subscribe();
  }

  updateProfile(user: User){
    this.profileService.updateProfile(user).subscribe();
  }

}
