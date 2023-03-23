import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Validators,FormControl,FormBuilder,FormGroup} from '@angular/forms'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  RegisterForm: FormGroup;

  valuefromuser:any;
  constructor() {}
  submit(){
    console.log('value is = ',this.valuefromuser)
  }
  ngOnInit(){
    this.RegisterForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ])

    })
  }

}
