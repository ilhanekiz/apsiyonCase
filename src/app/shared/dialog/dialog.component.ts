import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IMovie } from '../../core/interfaces/movie.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  theme = {
    isPrimary: this.storeService.theme.isPrimary,
    isGray: this.storeService.theme.isGray,
    isBlue: this.storeService.theme.isBlue
  };

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMovie,
    private storeService: StoreService) { }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
