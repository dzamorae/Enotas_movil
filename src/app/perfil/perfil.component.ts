import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class PerfilComponent  implements OnInit {

  constructor(private router: Router) {}

  navigateToBienvenido() {
    this.router.navigate(['/']);
  }
  ngOnInit() {}

}
