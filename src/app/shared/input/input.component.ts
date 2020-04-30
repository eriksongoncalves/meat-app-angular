import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit,
} from "@angular/core";
import { NgModel, FormControlName } from "@angular/forms";

@Component({
  selector: "mt-input-container",
  templateUrl: "./input.component.html",
})
export class InputComponent implements OnInit, AfterContentInit {
  input: any;
  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.input = this.model || this.control;

    if (this.input === undefined) {
      throw new Error(
        "Esse component precisa ser usado em uma diretiva NgModel ou FormControlName"
      );
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}