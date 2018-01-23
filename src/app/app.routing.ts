import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { AgendaComponent } from './agenda/agenda.component';



const appRoutes: Routes = [
    {path: '', component: LoginComponent,pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent,pathMatch: 'full'},
    {path: 'overview', component: OverviewComponent, pathMatch: 'full'},
    {path: 'agenda', component: AgendaComponent, pathMatch: 'full'}
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);