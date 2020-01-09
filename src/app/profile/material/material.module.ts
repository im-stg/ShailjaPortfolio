import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { MatTabsModule, MatSidenavModule, MatCardModule, MatFormFieldModule,
  MatInputModule,
  MatRippleModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
