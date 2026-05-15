import { Component } from '@angular/core';
import { AnimalService } from '../../service/animal-service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-component',
  standalone: true,
  imports: [ReactiveFormsModule], //IMPORTACION SUGERIDA IA
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css', //corchetes sugeridos IA
})
export class AnimalComponent {
  animalList:any = [];
  animalForm: FormGroup | any;

    constructor(private animalService: AnimalService,
      private formBuilder: FormBuilder,
      private router: Router,
      private toastr: ToastrService) {}
    getAllAnimals(){
      this.animalService.getAllAnimalData().subscribe((data: {}) => {
        this.animalList = data;
      });
    }
    newMessage(messageText: string) {
      this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
    } 

    newAnimalEntry(){
          this.animalService.newAnimal(this.animalForm.value).subscribe(
          () => {
            //Redirigiendo a la ruta actual /inicio y recargando la ventana
            this.router.navigate(['/inicio'])
            .then(() => {
              this.newMessage('Registro exitoso');
            })
          }
          );

    }

    ngOnInit(){
      this.animalForm = this.formBuilder.group({
        nombre: '',
        edad: 0,
        tipo: ''
      })
      this.getAllAnimals();
    }

  
}
