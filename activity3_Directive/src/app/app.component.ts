import { Student } from './student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity 3: Directive and Interface';

  studentList: Student[]= [
    {
      id: 21103840,
      firstName: 'Christina',
      lastName: 'Mangapuro',
      age:20,
      gender:'Female',
      nationality:'Filipino',
      status: "Single",
      homeAddress: 'Barugo, Leyte',
      elemSchool: 'Ibag ES',
      highSchool: 'Calingcaguing NHS',
      college: 'University of San Carlos',
    },
    {
      id: 21103867,
      firstName: 'Pia Mae',
      lastName: 'Meguizo',
      age:21,
      gender:'Female',
      nationality:'Filipino',
      status: "Single",
      homeAddress: 'Boljoon, Cebu',
      elemSchool: 'Alcoy ES',
      highSchool: 'Boljoon NHS',
      college: 'University of San Carlos',
    },
    {
      id: 21103816,
      firstName: 'Mark Joseph',
      lastName: 'Molina',
      age:21,
      gender:'Male',
      nationality:'Filipino',
      status: "Single",
      homeAddress: 'San Miguel, Leyte',
      elemSchool: 'San Miguel ES',
      highSchool: 'Barugo NHS',
      college: 'University of San Carlos',
    },
    {
      id: 21103866,
      firstName: 'Rowena',
      lastName: 'Pial',
      age:2,
      gender:'Female',
      nationality:'Filipino',
      status: "Single",
      homeAddress: 'Dalaguete, Cebu',
      elemSchool: 'Mantalongon ES',
      highSchool: 'Mantalongon NHS',
      college: 'University of San Carlos',
    }
  ]
}

