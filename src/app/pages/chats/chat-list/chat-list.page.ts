import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  standalone: false,
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage {
  chats = [
    {
      id: 1,
      name: 'Juan Pérez',
      image: 'assets/avatar1.png',
      lastMessage: 'Hola, ¿cómo estás?',
      time: '10:15 AM',
    },
    {
      id: 2,
      name: 'María López',
      image: 'assets/avatar2.png',
      lastMessage: '¿Qué tal tu día?',
      time: '9:30 AM',
    },
    {
      id: 3,
      name: 'Carlos García',
      image: 'assets/avatar3.png',
      lastMessage: 'Nos vemos mañana.',
      time: 'Ayer',
    },
    {
      id: 4,
      name: 'Ana Torres',
      image: 'assets/avatar4.png',
      lastMessage: 'Ok, perfecto.',
      time: 'Sábado',
    },
  ];

  constructor(private router: Router) {}

  openChat(chat: any) {
    this.router.navigate(['/tabs/chats/chat-detail', chat.id]);
  }
}
