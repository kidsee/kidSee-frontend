import { JsonApiModel } from 'angular2-jsonapi';
import { AbstractObjectService } from './../../services/abstract-object.service';
import { Datastore } from './../../services/datastore';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './useredit-dialog.component.html',
  styleUrls: ['./useredit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  ngOnInit(): void { }
  constructor(public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JsonApiModel, public abstractObjectService: AbstractObjectService) { }

    getErrorMessage() {
      return this.formControl.hasError('required') ? 'Required field' :
        this.formControl.hasError('email') ? 'Not a valid email' :
          '';
    }

    submit() { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    stopEdit(): void {
      const specificObjectService = this.abstractObjectService.getObject(this.data.modelConfig.type);
      specificObjectService.patchObject(this.data);
    }
  }