import { Component } from '@angular/core';

@Component({
  selector: 'app-status-list',
  standalone: false,
  templateUrl: './status-list.page.html',
  styleUrls: ['./status-list.page.scss'],
})
export class StatusListPage {
  statuses = [
    { id: 1, user: 'John Doe', time: 'Today, 12:00 PM' },
    { id: 2, user: 'Jane Smith', time: 'Today, 12:15 PM' },
    { id: 3, user: 'Enrique Alvarez', time: 'Today, 12:30 PM' },
  ]; 

  openStatus(statusId: number) {
    // Navegar al detalle del estado
  }
}

