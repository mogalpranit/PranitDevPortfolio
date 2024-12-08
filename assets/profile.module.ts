import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from './profile-routing.module';
import { SnotifyModule } from 'ng-snotify';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ProfileRoutingModule,
    SnotifyModule.forRoot(),
  ],
})
export class ProfileModule {}
