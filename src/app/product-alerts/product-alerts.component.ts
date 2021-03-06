import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

// this is called the Component decorator and indicates that this is a component
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

// The @Input() decorator indicates that the property value passes in from the component's parent
  @Input() product;
  @Output() notify = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}