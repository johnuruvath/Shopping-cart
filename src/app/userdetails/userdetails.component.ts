import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  adduserdetail:FormGroup;

  ngOnInit(): void {
    
  }

constructor(private fb:FormBuilder) {

  this.adduserdetail=this.fb.group({
    fname:'',
    lname:'',
    mnum:'',
    address:'',
    email:'',
    age:'',
    dob:'',
  })
}

  


  userdetails(){
    console.log(this.adduserdetail.value);
    
  }
}
