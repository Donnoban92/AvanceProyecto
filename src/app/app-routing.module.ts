import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';
import { CatalogoPageModule } from './catalogo/catalogo.module';
import { RegistroPageModule } from './registro/registro.module';
import { InicioSesionPageModule } from './inicio-sesion/inicio-sesion.module';
import { MenuPageModule } from './menu/menu.module';


const routes: Routes = [
  {  
    path: 'home',
    loadChildren: () => HomePageModule
  },
  {  
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {  
    path: 'catalogo',
    loadChildren: () => CatalogoPageModule
  },
  {
    path: 'registro',
    loadChildren: () => RegistroPageModule
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => InicioSesionPageModule
  },
  {
    path: 'menu',
    loadChildren: () => MenuPageModule
  },
  {
    path: 'el-header',
    loadChildren: () => import('./el-header/el-header.module').then( m => m.ElHeaderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
