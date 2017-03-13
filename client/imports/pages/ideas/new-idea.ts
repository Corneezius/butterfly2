// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Ideas} from '../../../../imports/collections';
// import template from './new-idea.component.html';
//
//
// @Component({
//   selector: 'new-idea',
//   template
// })
// export class NewIdeaComponent implements OnInit {
//   addForm: FormGroup;
//
//   constructor(
//     private formBuilder: FormBuilder
//   ) {}
//
//   ngOnInit() {
//     this.addForm = this.formBuilder.group({
//       title: ['', Validators.required],
//       author: [],
//     });
//   }
//
//   addIdea(): void {
//     if (this.addForm.valid) {
//       Ideas.insert(this.addForm.value);
//
//       this.addForm.reset();
//     }
//   }
// }
