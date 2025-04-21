import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  selectedNewsItem: any = null;

//News and Annoucements Information
news = [
{
  id:1,
  title: 'Computer Classes Begin at Tsala',
  story:'Tsala has evolved and is now introducing computer lessons at the Dema branch. In this age of technology, it is essential for our young stars to be computer literate so they are fully equipped for the outside world. In these classes the students are taught about the basic hardware and software components of computer and how they work. From the CPU to the taskbar on the home screen',
  imgPath: 'assets/images/Computer-class.jpeg',
  type: 'Announcement',
  writer: 'John Doe',
  date: '12 March 2025'
},
{
  id:2,
  title: 'Field trip for ECD students',
  imgPath: 'assets/images/Field-trio.jpeg',
  date: '01 April 2025'
},

{
  id:3,
  title: ' Sports Awards May 2025',
  imgPath: 'assets/images/Awards-Day.jpeg',
  date: '16 May 2025'
},

]



//Modal Code
openModal(item: any) {
  this.selectedNewsItem = item;
}

closeModal() {
  this.selectedNewsItem = null;
}

}



