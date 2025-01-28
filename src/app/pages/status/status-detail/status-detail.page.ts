import { Component } from '@angular/core';

@Component({
  selector: 'app-status-detail',
  standalone: false,
  templateUrl: './status-detail.page.html',
  styleUrls: ['./status-detail.page.scss'],
})
export class StatusDetailPage {
  status = { user: 'John Doe', time: 'Today, 12:00 PM', content: 'Hello World!' };
}
