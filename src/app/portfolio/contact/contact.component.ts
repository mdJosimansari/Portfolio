import { Component,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  contactObj: any = {
    name:"",
    email:"",
    number:"",
    message:""

  }

  formValue:any;

  onSubmit(){
    debugger;
    this.formValue = this.contactObj 
  }
}
