import {
  Directive,
  Self,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[appCleanUnusualCharacters]',
})
export class CleanUnusualCharactersDirective implements OnInit, OnDestroy {
  private subscriptions: Subscription;

  constructor(
    @Self() private control: NgControl,
    private element: ElementRef
  ) {}

  @HostListener('window:keyup', ['$event']) updateCursorPosition(
    event: KeyboardEvent
  ): void {
    if (event.target !== this.element.nativeElement) {
      return;
    }
  }

  ngOnInit(): void {
    this.subscriptions = this.control.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((v: string) => this.cleanInput(v));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private cleanInput(originalValue: string): void {
    if (!originalValue) {
      return;
    }

    const newString = 'working!';
    this.control.viewToModelUpdate(newString);
    if (
      this.control.control &&
      typeof this.control.control.patchValue !== 'undefined'
    ) {
      this.control.control.patchValue(newString);
    }
  }
}
