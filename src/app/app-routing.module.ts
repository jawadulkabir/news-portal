import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { RegularNewsComponent } from './components/regular-news/regular-news.component';

const routes: Routes = [
  { path: 'latest', component: HomeComponent },
  { path: 'detail/:id', component: NewsDetailComponent },
  { path: 'category/:categoryType', component: RegularNewsComponent },
  { path: '', redirectTo: '/latest', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
