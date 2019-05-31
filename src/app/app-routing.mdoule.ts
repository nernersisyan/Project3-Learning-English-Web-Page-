import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LessonsComponent} from './lessons/lessons.component';
import {TestsComponent} from './tests/tests.component';
import {AuthGuard} from './auth.guard';
import {HeaderComponent} from './header/header.component';


  const appRoutes : Routes = [
    {path: '', component: MainComponent, canActivate: [AuthGuard], children: [
        {path: ':id', component: LessonsComponent},
        {path: 'tests/:id', component: TestsComponent}
      ]},
  ];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
