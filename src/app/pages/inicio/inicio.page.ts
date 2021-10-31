import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  componentes: Componente[] = [
    {
      icon: 'construct-outline',
      name: 'action sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'diamond-outline',
      name: 'alert',
      redirectTo: '/alert',
    },
  ];
}
