import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RuleService } from '../shared/rule.service'
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from '../../shared/navbar.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {

  constructor(private ruleService: RuleService, private toastr: ToastrService,public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null)
    form.reset();
    this.ruleService.selectedRule = {
      RuleID: null,
      Firewall_Device: '',
      Object_Group: '',
      Application_Name: '',
      Hostname: '',
      IPAddress: '',
      FirstName: '',
      LastName: '',
      ACL1: '',
      Final_Business_Justification: '',
    }
  }

  onSubmit(form: NgForm) {
    if(form.value.RuleID == null){
    this.ruleService.postRule(form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.ruleService.getRuleList();
        this.toastr.success('New Record Added');
      })
  }
  else {
    this.ruleService.putRule(form.value.RuleID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.ruleService.getRuleList();
        this.toastr.info('Record Updated');
      });
    }
  } 
}