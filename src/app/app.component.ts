import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h1>Olá Angular!</h1>
    <p *ngIf="mostrar">Isso é um teste de ngIf.</p>
  `,
})
export class AppComponent {
  mostrar = true;
}
