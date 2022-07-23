import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name: string = "Hector";

  contentSelected: string = "info";

  constructor() { }

  ngOnInit(): void {
  }

  changeContent(content: string) {

    this.contentSelected = content;
  }

}
