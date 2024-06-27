import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Professor';
  cursos: any;

  termoPesquisa = '';
  constructor(private api: ApiService) {}

  public buscarCursosIFFar() {
    this.api.listarCursos(this.termoPesquisa).subscribe((dadosIFFar) => {
      this.cursos = dadosIFFar;
    });
  }
}
