import { Component } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  name: string = '';
  photos: number = 0;
  followers: number = 0;
  following: number = 0;
  location: string = '';
  description: string = '';

  ar = [];

  api3(data: any) {
    this.name = data.Name;
    this.photos = data.PhotosCount;
    this.followers = data.FollowersCount;
    this.following = data.FollowsCount;
    this.location = data.Location;
    this.description = data.Description;

    data.PhotoList.forEach(element => {
      this.ar.push(element);

    });
  }
}
