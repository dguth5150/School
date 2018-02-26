import { Component, OnInit } from '@angular/core';

import { RuleService } from './shared/rule.service';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
  providers: [ RuleService ]
})
export class RulesComponent implements OnInit {

  constructor(private ruleService: RuleService,public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
