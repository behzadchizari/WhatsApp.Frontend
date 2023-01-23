import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { UikitModule } from '../uikit/uikit.module';
import { ThemeTestComponent } from './theme-test/theme-test.component';


@NgModule({
  declarations: [
    MainComponent,
    TestComponent,
    ThemeTestComponent
  ],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    UikitModule
  ]
})
export class PlaygroundModule { }
