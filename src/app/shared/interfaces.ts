import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IActor {
    id: number;
    name: string;
    email: string;
    devices?: IDevices[];
}

export interface IDevices {
    udid: string;
    name: string;
}
