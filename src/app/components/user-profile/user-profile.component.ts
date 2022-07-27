import { ReviewService } from './../../services/review.service';
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

  addresses: Address[] = [];

  reviews: any[] = [];

  modalVisibility: string = "";

  curUser: User = new User(1, "", "", "", "", "", this.addresses);

  contentSelected: string = "info";

  constructor(
    private userv: UserService,
    private reviewService: ReviewService
    ) { }

  ngOnInit(): void {
    this.getTestUser();
    this.seeReviews(1);
  }

  openPopup() {

    this.modalVisibility = "block";

  }

  closePopup() {

    this.modalVisibility = "none"

  }

  updateInfo() {

    this.closePopup();
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

  seeReviews(userId:number) {
    this.reviewService.getUsersReviews(userId).subscribe({
      next: (response) => {
        for (let review of Object.values(response)) {
          this.reviews.push(review);
          console.log(review);
        }

        this.reviews = this.reviews.filter((review) => {
          return review.content != ""
        });
      }
    })
  }

  getReviews(userId: number){
    this.reviewService.getUsersReviews(userId).subscribe({
      next: (response) => {
        for (let review of Object.values(response)){
          this.reviews.push(review);
        }
      }
    })
  }

}
