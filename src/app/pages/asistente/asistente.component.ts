import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModulsModule } from '../../moduls/moduls.module';

@Component({
  selector: 'app-asistente',
  standalone: true,
  imports: [ModulsModule, FooterComponent],
  templateUrl: './asistente.component.html',
})
export default class AsistenteComponent {}
