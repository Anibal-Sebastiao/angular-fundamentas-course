import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective {

  @Input('modal-trigger') trigger: string = '';

  constructor(public ref: ElementRef,
    @Inject(JQ_TOKEN) private $: any) {}

  @HostListener('click')
  triggerModal() {
    this.$(`#${this.trigger}`).modal({})
    console.log(`#${this.trigger}`);

  }


}
