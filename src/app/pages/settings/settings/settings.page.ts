import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  user = {
    name: 'Alvarez',
    status: 'No puedo hablar, solo WhatsApp',
    avatar: 'assets/avatar-user.png',
  };

  constructor() {}

  openProfile() {
    console.log('Perfil del usuario abierto');
    // Aquí puedes redirigir a una página de perfil
  }

  openOption(option: string) {
    console.log(`Opción seleccionada: ${option}`);
    // Implementa navegación o funcionalidad específica
  }
}
