import { Component, signal } from '@angular/core';
import { RouterOutlet, FormsModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('webzoologico');
  alias = "JFBC";
}
