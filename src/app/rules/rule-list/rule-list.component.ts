import { Component, OnInit } from '@angular/core';

import { RuleService }  from '../shared/rule.service';
import { Rule } from '../shared/rule.model';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from '../../shared/navbar.service';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {

  constructor(private ruleService: RuleService, private toastr: ToastrService,public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.ruleService.getRuleList();
  }

  showForEdit(rle: Rule){
    this.ruleService.selectedRule = Object.assign({}, rle);;
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this record?') == true){
    this.ruleService.deleteRule(id)
      .subscribe(x => {
        this.ruleService.getRuleList();
        this.toastr.warning("Deleted Successfully");
      })
    }
  }
}
