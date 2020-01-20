import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];

  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile= this.profile
    }) 
   }

  ngOnInit() {
  }

}
