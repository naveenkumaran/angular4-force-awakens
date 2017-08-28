import { Component, Directive, OnInit, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';

import { IActor } from "../../../shared/interfaces";

function passwordMatcher(c: AbstractControl) {
  if (!c.get('password') || !c.get('confirm')) return null;
  return c.get('password').value === c.get('confirm').value
    ? null : {'nomatch': true};
}

@Directive({
  selector: '[password-matcher]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher}
  ]
})
export class PasswordMatcher {

}

@Component({
  selector: 'app-template-drive-forms',
  templateUrl: './template-drive-forms.component.html',
  styleUrls: ['./template-drive-forms.component.scss']
})
export class TemplateDriveFormsComponent implements OnInit {

  @Input() actor: IActor;
  id : any;

  constructor(
    requestOptions: RequestOptions,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      
    }

  ngOnInit() {
      this.route.params.map(params => params['id'])
      .do(id => this.id = +id)
      .subscribe(id => id);
    console.log(this.id);
  }

}
