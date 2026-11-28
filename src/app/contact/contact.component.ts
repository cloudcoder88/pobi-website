import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';  // it is used for making http request to the backend server
import { FormsModule} from '@angular/forms'; // uses the ngmodel for two way data binding in the form inputs
import { CommonModule } from '@angular/common';//uses ngif and ngfor directives in the html templates



@Component({
  selector: 'app-contact',
  standalone:true,// this tells angular that this is a standalone page,it uses its own html and css files and does not depend on any other component.
  imports: [FormsModule,CommonModule], //always import common modules for the *ngif and *ngfor directives
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact={
    fullName:'',
    email:'',   // this is an empty form,when a user fills out the form, the values will be sent to the backend server using the http post request.
    message:'',
    phone:'',
  };

  isLoading:boolean=false; // shows "sending" and disables button so the user does not click the button multiple times while the form is being submitted.
  submitted =false; // add this to tract form submission status
  isSucess:boolean =false; 
serverMessage ='';// these properties are used to tract server responses.
  constructor(private http: HttpClient) {} // ask angular to make http client available to this component so we can use it to send the form data to the backend server.
  onSubmit(contactForm:any){
    this.submitted=true;  //accepts the form parameter and sets submitted to true

    //check if form is valid before submitting it.
    if(contactForm.invalid){
      alert('❌ Please fill out all the required fields correctly!.');
      return;
    }
    this.isLoading =true;
    this.serverMessage ='';
    this.isSucess =false;
    this.http.post('https://skincare-backend-vjxv.onrender.com/contact',this.contact).subscribe({
      next:(res) => {
        //success -use the custom messages instead of the javascript alert  
        this.serverMessage ='✅ Message sent successfully!';
        this.isSucess =true;
        this.contact = {fullName:'',email:'',phone:'',message:''};
        this.isLoading = false;
        this.submitted =false; //reset form submission status
        contactForm.reset(); // this will clear the form validation states
      },
      error:(err) => {
        //Error - use the custom message instead of the javascript alert
        this.serverMessage = '❌ Something went wrong. Please try again.';
        this.isSucess =false;
        console.error('Error sending message:',err);
        this.isLoading =false;
      }
      
    });
  }
}