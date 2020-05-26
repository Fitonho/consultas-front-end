import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pacientes',
        loadChildren: () => import('./pacientes/pacientes.module').then( m => m.PacientesPageModule)
      },
      {
        path: 'consultas-hoje',
        loadChildren: () => import('./consultas-hoje/consultas-hoje.module').then( m => m.ConsultasHojePageModule)
      },
      {
        path: 'consultas-proximas',
        loadChildren: () => import('./consultas-proximas/consultas-proximas.module').then( m => m.ConsultasProximasPageModule)
      },
      {
        path: 'consultas-todas',
        loadChildren: () => import('./consultas-todas/consultas-todas.module').then( m => m.ConsultasTodasPageModule)
      },
      {
        path: 'relatorio',
        loadChildren: () => import('./relatorio/relatorio.module').then( m => m.RelatorioPageModule)
      },
      {
        path: 'totais',
        loadChildren: () => import('./totais/totais.module').then( m => m.TotaisPageModule)
      },
      {
        path: 'pendente',
        loadChildren: () => import('./pendente/pendente.module').then( m => m.PendentePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/pacientes',
        pathMatch: 'full'
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
