import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [ CommonModule, FormsModule, MatButtonModule, MatDialogClose ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  data: any = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);

  constructor() { }
  
  ngOnInit(): void {
    console.log(this.data);
  }

  closeDialog(): void {
    this?.dialogRef?.close(true);
  }
}
