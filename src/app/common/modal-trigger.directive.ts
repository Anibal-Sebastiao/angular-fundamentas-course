import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective {

  @Input('modal-trigger') trigger: string = '';

  el: HTMLElement | undefined;

  constructor(public ref: ElementRef,
    @Inject(JQ_TOKEN) private $: any) {
      this.el = ref.nativeElement;
     }

  OnInit() {
    this.el?.addEventListener('click', () => this.$(`[${this.trigger}]`).modal({}))
  }

}
