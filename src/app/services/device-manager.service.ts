import { Injectable, HostListener } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DeviceManagerService {
	private _device: string = '';

	public get device(): string {
		return this._device;
	}

	public set device(value: string) {
		this._device = value;
	}
}
