import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pay-completed',
  templateUrl: './modal-pay-completed.component.html',
  styleUrls: ['./modal-pay-completed.component.scss']
})
export class ModalPayCompletedComponent implements OnInit {

  @Input() subcategory;
  @Input() school;
  @Input() price;
  @Input() code;
  @Input() name;
  @Input() category;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
