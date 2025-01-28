import { Component } from '@angular/core';

@Component({
  selector: 'app-call-list',
  standalone: false,
  templateUrl: './call-list.page.html',
  styleUrls: ['./call-list.page.scss'],
})
export class CallListPage {
  calls = [
    {
      id: 1,
      name: 'Juan Pérez',
      image: 'assets/avatar1.png',
      time: 'Hoy, 10:15 AM',
      type: 'missed', // missed, incoming, outgoing
    },
    {
      id: 2,
      name: 'María López',
      image: 'assets/avatar2.png',
      time: 'Ayer, 8:45 PM',
      type: 'incoming',
    },
    {
      id: 3,
      name: 'Carlos García',
      image: 'assets/avatar3.png',
      time: 'Sábado, 6:30 PM',
      type: 'outgoing',
    },
    {
      id: 4,
      name: 'Ana Torres',
      image: 'assets/avatar4.png',
      time: 'Sábado, 4:15 PM',
      type: 'missed',
    },
  ];

  constructor() {}
}

