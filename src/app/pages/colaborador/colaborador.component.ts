import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModulsModule } from '../../moduls/moduls.module';

@Component({
  selector: 'app-colaborador',
  standalone: true,
  imports: [ModulsModule, FooterComponent],
  templateUrl: './colaborador.component.html',
})
export default class ColaboradorComponent {}
