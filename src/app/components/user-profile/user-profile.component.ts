import { ReviewService } from './../../services/review.service';
import { Router } from '@angular/router';
import { PurchaseService } from './../../services/purchase.service';
import { Purchase } from './../../models/purchase';
import { Product } from './../../models/product';
import { AppComponent } from './../../app.component';
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
  purchases: Purchase[] = [];

  reviews: any[] = [];

  modalVisibility: string = "";

  curUser: User = new User(1, "", "", "", "", "", this.addresses, this.purchases);

  contentSelected: string = "info";

  constructor(public appComponent: AppComponent, private userv: UserService, 
  private pserv: PurchaseService, private userv: UserService,
    private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
    this.curUser = this.appComponent.curUser;
    this.getPurchases();
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

  getPurchases() {

    this.pserv.getUserPurchases(this.curUser.id).subscribe(
      data => {
        this.curUser.purchases = data;
      },
      (err) => console.log(err)
    )
  }

  selectItem(itemId: number) {
    sessionStorage.setItem('selectedProductId', itemId.toString());
  }
}
