import { PerfilComponent } from './perfil/perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { MenuApoderadoComponent } from './menu-apoderado/menu-apoderado.component';

export const routes: Routes = [
  { path: ''          , component: BienvenidoComponent },
  { path: 'login'     , component: LoginComponent },
  { path: 'menu'      , component: MenuApoderadoComponent },
  { path: 'perfil'    , component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
