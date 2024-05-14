import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-apoderado',
  templateUrl: './menu-apoderado.component.html',
  styleUrls: ['./menu-apoderado.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class MenuApoderadoComponent  implements OnInit {

  constructor(private router: Router) {}

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  ngOnInit() {}

}
