import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalPayCompletedComponent } from '../modal-pay-completed/modal-pay-completed.component';

@Component({
  selector: 'app-modal-pay-pick',
  templateUrl: './modal-pay-pick.component.html',
  styleUrls: ['./modal-pay-pick.component.scss']
})
export class ModalPayPickComponent implements OnInit {

  @Input() subcategory;
  @Input() school;
  @Input() price;
  @Input() code;
  @Input() category;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(ModalPayCompletedComponent);
    modalRef.componentInstance.subcategory = this.subcategory;
    modalRef.componentInstance.school = this.school;
    modalRef.componentInstance.price = this.price;
    modalRef.componentInstance.code = '5JKLM83';
    modalRef.componentInstance.name = 'Nombre Nombre Apellido Apellido';
    modalRef.componentInstance.category = this.category;
  }

}
