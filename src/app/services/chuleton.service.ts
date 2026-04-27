import { Injectable, signal } from "@angular/core";
import { Chuleton } from "../models/interfaces";

@Injectable({
    providedIn: 'root',
})
export class ChuletonService {

    chuletones: any = signal([]);

    constructor() {
        this.getChuletones();
    }

    getChuletones(): void {
        this.chuletones.set(JSON.parse(localStorage.getItem('chuletones') || '[]'));
    }

    setChuleton(chuleton: Chuleton): void {
        const chuletones: Chuleton[] = this.chuletones();
        chuletones.push(chuleton);
        localStorage.setItem('chuletones', JSON.stringify(chuletones));
        this.getChuletones();
    }
}
