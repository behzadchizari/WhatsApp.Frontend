import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ThemeTestComponent } from './theme-test/theme-test.component';

const routes: Routes = [
  {path: 'playground/test', component: TestComponent},
  {path: 'playground/theme', component: ThemeTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
