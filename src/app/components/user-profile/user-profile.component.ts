import { Address } from './../../models/address';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  
  address: Address[] = [];

  

  modalVisibility: string = "";

  curUser: User = new User(1, "", "", "", "", "", this.address);

  currAddress: Address = new Address(0, '', '', '', '', '', this.curUser);

  contentSelected: string = "info";

  constructor(private userv: UserService) { }

  ngOnInit(): void {
    this.getTestUser();
  }

  openPopup() {

    this.modalVisibility = "block";

  }

  closePopup() {

    this.modalVisibility = "none"

  }

  updateInfo() {

    this.closePopup();
    this.curUser.addresses.push(this.currAddress);
    // this.userv.updateUser(this.curUser).subscribe(
    //   data => {
    //     this.curUser = data;
    //   },
    //   (err) => console.log(err)
    //   )
  
  }

  getTestUser() {

    this.userv.findUserById(1).subscribe(
      data => {
      this.curUser = data;
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
