import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';//all the basic imports are imported here first



@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact={
    fullName:'',
    email:'',
    message:'',
    phone:'',
  };

  isLoading:boolean=false; //spinner flag
  constructor(private http: HttpClient) {}
  onSubmit(){
    this.isLoading=true;
    this.http.post('',this.contact).subscribe({
      next:(res) =>{
        alert('Message Sent Sucessfully !');
        this.contact = {fullName:'',email:'',phone:'',message:''};
        this.isLoading=false; //stops the spinner
      },
      error:(err) => {
        console.error('Error Sending Messages:', err);
        alert('Something Went Wrong.Please try again! .');
        this.isLoading=false; //stops the spinner
      }
    });
  }


}
