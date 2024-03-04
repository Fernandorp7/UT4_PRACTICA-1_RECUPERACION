import { Component } from '@angular/core';
import { Profesores } from '../profesores';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.css',
})

export class ProfesoresComponent {
  private _id: string = '';

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  profesores?: Array<Profesores>;
  profesor?: Profesores;
}
