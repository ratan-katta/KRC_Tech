import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { ItemList } from './pages/item-list/item-list';
import { ItemForm } from './pages/item-form/item-form';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'main', component: Dashboard},
  { path: 'dashboard', component: Dashboard},
  { path: 'items', component: ItemList },
  { path: 'items/new', component: ItemForm },
  { path: 'items/edit/:id', component: ItemForm },
];
