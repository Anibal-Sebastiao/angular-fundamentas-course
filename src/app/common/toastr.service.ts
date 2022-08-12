import { InjectionToken } from "@angular/core";

export const TOASTER_TOKEN = new InjectionToken<Toastr>('toaster')

export interface Toastr {
  success(message: string, title?: string): void
  info(message: string, title?: string): void
  warnging(message: string, title?: string): void
  error(message: string, title?: string): void
}
