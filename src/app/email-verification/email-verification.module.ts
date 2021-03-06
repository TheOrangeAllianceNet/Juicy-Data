import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailVerificationComponent } from './email-verification.component';

import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: EmailVerificationComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmailVerificationComponent]
})
export class EmailVerificationModule {}
