import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name: string = "Hector";

  contentSelected: string = "info";

  constructor(private userv: UserService) { }

  ngOnInit(): void {
    this.getTestUser();
  }

  getTestUser() {

    this.userv.findUserById(1).subscribe(
      data => {
      this.name = data.firstName;
    },
    (err) => console.log(err)
    )
  }

  changeContent(content: string) {

    document.getElementsByName("button").forEach(button => {
      button.classList.remove("active");
    })

    document.getElementById(content)?.classList.add("active");

    this.contentSelected = content;
  }

}
