import { Component } from '@angular/core';
import { ExDirDirective } from './dir/ex-dir.directive';
import { CommonModule } from '@angular/common';
import { ExPipePipe } from './pipe/ex-pipe.pipe';

@Component({
  selector: 'app-example',
  imports: [ CommonModule, ExDirDirective, ExPipePipe ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  color = 'red'
}
