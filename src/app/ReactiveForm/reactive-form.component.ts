/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
contactForm:FormGroup;

countryList: country[] = [
  new country("1", "India"),
  new country('2', 'USA'),
  new country('3', 'England')
];
  constructor() { }

  
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
    });
  }

  onSubmit(){
console.log(this.contactForm)
  }

 

}

export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
*/

import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { groupBy } from 'rxjs/internal/operators/groupBy';
 
 
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
 
  title = 'Angular Reactive forms';
 
  contactForm;
 
  constructor(private formBuilder: FormBuilder) {
 
 
 
    // this.contactForm = this.formBuilder.group({
    //   firstname: [''],
    //   lastname: [''],
    //   email: [''],
    //   gender: [''],
    //   isMarried: [''],
    //   country: [''],
    // });
 
    // this.contactForm = this.formBuilder.group({
    //   firstname: [''],
    //   lastname: [''],
    //   email: [''],
    //   gender: [''],
    //   isMarried: [''],
    //   country: [''],
    //   address: this.formBuilder.group({
    //     city: [''],
    //     street: [''],
    //     pincode: ['']
    //   })
    // });
 
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      })
    });
  }
 
 
  get firstname() {
    return this.contactForm.get('firstname');
  }
 
  get lastname() {
    return this.contactForm.get('lastname');
  }
 
  get email() {
    return this.contactForm.get('email');
  }
 
  get gender() {
    return this.contactForm.get('gender');
  }
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  }
 
  get country() {
    return this.contactForm.get('country');
  }
 
  get city() {
    return this.contactForm.get('city');
  }
 
  get street() {
    return this.contactForm.get('street');
  }
 
  get pincode() {
    return this.contactForm.get('pincode');
  }
 
 
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
 
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
 