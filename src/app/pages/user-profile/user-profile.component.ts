import { AddressService } from '../../services/address.service';
import { ReviewService } from '../../services/review.service';
import { Router } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';
import { Purchase } from '../../models/purchase';
import { Address } from '../../models/address';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Component, OnInit} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {

  currentUserIdString: any = sessionStorage.getItem('userId');
  currentUserId: number = parseInt(this.currentUserIdString);

  currentUserString: any = sessionStorage.getItem('user');
  currentUser: User = this.currentUserString ? JSON.parse(this.currentUserString) : new User("", "", "", "" ,"",[],[],[]);

  addresses: any[] = [];
  purchases: Purchase[] = [];
  reviews: any[] = [];

  isNewAddress: boolean = false;

  modalVisibility: string = '';

  updatedUserPlaceholder: User = new User(
    this.currentUser.email,
    this.currentUser.firstName,
    this.currentUser.lastName,
    '',
    this.currentUser.role,
    this.purchases,
    this.reviews,
    this.addresses
  );

  contentSelected: string = 'info';

  updatedAddress = new Address('', '', '', '', '', [
    this.updatedUserPlaceholder,
  ]);

  updateUserInfoForm = new FormGroup({
    firstName: new FormControl(this.currentUser.firstName, [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    lastName: new FormControl(this.currentUser.lastName, [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    address: new FormControl(this.updatedAddress.street, [
      Validators.required,
      Validators.pattern('^[0-9]{1,5}( [a-zA-Z]+.?)+$'),
    ]),
    secondary: new FormControl(this.updatedAddress.secondary),
    city: new FormControl(this.updatedAddress, [
      Validators.required,
      Validators.pattern('^([A-Z][a-z]+){1}( [A-Z][a-z]+)*$'),
    ]),
    state: new FormControl(this.updatedAddress.state, [Validators.required]),
    zip: new FormControl(this.updatedAddress.zip, [
      Validators.required,
      Validators.pattern('^[0-9]{5}-?([0-9]{4})?'),
    ]),
  });

  constructor(
    private userService: UserService,
    private purchaseService: PurchaseService,
    private reviewService: ReviewService,
    private addressService: AddressService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe({
      next: (data) => {
        if (!data) {
          this.router.navigate(['/']);
          return
        }
        this.getPurchases(this.currentUserId);
        this.getReviews(this.currentUserId);
        this.getAddresses(this.currentUserId);
      },
    });
  }

  getReviews(userId: number) {
    this.reviewService.getUsersReviews(userId).subscribe({
      next: (reviews) => {
        for (let review of Object.values(reviews)) {
          this.reviews.push(review);
        }
      },
    });
  }

  getPurchases(userId: number) {
    this.purchaseService.getUserPurchases(userId).subscribe({
      next: (purchases) => {
        for (let purchase of Object.values(purchases)) {
          this.purchases.push(purchase);
        }
      },
    });
  }

  getAddresses(userId: number) {
    this.addressService.getUserAddresses(userId).subscribe({
      next: (addresses) => {
        for (let address of Object.values(addresses)) {
          this.addresses.push(address);
        }
        if (this.addresses.length === 0) {
          this.isNewAddress = true;
        } else {
          this.updatedAddress.street = this.addresses[0].street;
          this.updatedAddress.secondary = this.addresses[0].secondary;
          this.updatedAddress.city = this.addresses[0].city;
          this.updatedAddress.state = this.addresses[0].state;
          this.updatedAddress.zip = this.addresses[0].zip;
        }
      },
    });
  }

  openPopup() {
    this.modalVisibility = 'block';
  }

  closePopup() {
    this.modalVisibility = 'none';
    window.location.reload();
  }

  updateInfo() {
    this.modalVisibility = 'none';
    console.log("updateInfo Ran")

    this.addresses[0].street = this.updatedAddress.street
    this.addresses[0].secondary = this.updatedAddress.secondary
    this.addresses[0].state = this.updatedAddress.state
    this.addresses[0].zip = this.updatedAddress.zip
    this.addresses[0].city = this.updatedAddress.city

    if (this.isNewAddress) {
      this.addressService.addAddress(this.addresses[0], this.currentUserId).subscribe({
        next: () => {
          this.userService.findUserById(this.currentUserId).subscribe({
            next:(user)=>{
              user.firstName = this.updatedUserPlaceholder.firstName;
              user.lastName = this.updatedUserPlaceholder.lastName;
              this.userService.updateUser(user, this.currentUserId).subscribe({
                next: (updatedUser) => {
                  this.currentUser.firstName = updatedUser.firstName;
                  this.currentUser.lastName = updatedUser.lastName;
                  sessionStorage.setItem("user", JSON.stringify(this.currentUser))
                }
              })
            }
          });
        }
      });
    } else {
      this.addressService.updateAddress(this.addresses[0], this.currentUserId).subscribe({
        next:(updatedAddresses) =>{
          this.currentUser.firstName = this.updatedUserPlaceholder.firstName;
          this.currentUser.lastName = this.updatedUserPlaceholder.lastName;
          this.currentUser.addresses[0] = updatedAddresses;

          this.userService.updateUser(this.currentUser, this.currentUserId).subscribe({
            next: (updatedUser) => {
              this.currentUser.firstName = updatedUser.firstName;
              this.currentUser.lastName = updatedUser.lastName;
              sessionStorage.setItem("user", JSON.stringify(this.currentUser))
            }
          })
        }
      });
    }
    this.getAddresses(this.currentUserId);
    // this.currentUser.purchases = this.purchases;
    // this.currentUser.reviews = this.reviews;
    // this.currentUser.addresses = this.addresses
    // console.log(this.currentUser)

    // this.appComponent.curUser = this.tempUser;
    //
    // this.currAddress.users = [this.appComponent.curUser];
    // this.updateAddress();
    //
    // setTimeout(() => {
    //   this.appComponent.curUser.addresses = this.addresses;
    //   this.userService.updateUser(this.appComponent.curUser).subscribe(
    //     (data) => {
    //       this.appComponent.curUser = data;
    //     },
    //     (err) => console.log(err)
    //   );
    // }, 200);
    //
    // setTimeout(() => {
    //   this.getPurchases(this.currentUserId);
    // }, 300);
    // setTimeout(() => {
    //   this.getAddresses(this.currentUserId);
    // }, 400);
  }

  // updateAddress() {
  // // TODO: something to work on
  //   this.addresses = [];
  //   this.addressService.updateAddress(this.currAddress).subscribe(
  //     (data) => {
  //       this.addresses.push(data);
  //     },
  //     (err) => console.log(err)
  //   );
  // }

  changeContent(content: string) {

    var listItems = document.getElementsByClassName('list-group-item')

    for (var i = 0; i < listItems.length; i++) {

      listItems.item(i)?.classList.remove('active');
    }

    document.getElementById(content)?.classList.add('active');
    this.contentSelected = content;
  }

  selectItem(itemId: number) {
    sessionStorage.setItem('selectedProductId', itemId.toString());
  }
}