import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModulsModule } from '../../moduls/moduls.module';

@Component({
  selector: 'app-colaborador-externo',
  standalone: true,
  imports: [ModulsModule, FooterComponent],
  templateUrl: './colaborador-externo.component.html',
})
export default class ColaboradorExternoComponent {}
