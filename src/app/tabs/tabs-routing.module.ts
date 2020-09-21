import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pacientes',
        loadChildren: () => import('../pacientes/pacientes.module').then( m => m.PacientesPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'consultas-hoje',
        loadChildren: () => import('../consultas/hoje/consultas-hoje.module').then( m => m.ConsultasHojePageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'consultas-proximas',
        loadChildren: () => import('../consultas/proximas/consultas-proximas.module').then( m => m.ConsultasProximasPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'consultas-todas',
        loadChildren: () => import('../consultas/todas/consultas-todas.module').then( m => m.ConsultasTodasPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'relatorio',
        loadChildren: () => import('../relatorio/relatorio.module').then( m => m.RelatorioPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'totais',
        loadChildren: () => import('../totais/totais.module').then( m => m.TotaisPageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'pendente',
        loadChildren: () => import('../consultas/pendente/pendente.module').then( m => m.PendentePageModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/pacientes',
        pathMatch: 'full',
        canLoad: [AuthGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pacientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
