import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    CommonModule,
    MatSidenavModule,
  ],
})
export class MaterialImportsModule {}
