import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModulsModule } from '../../moduls/moduls.module';

@Component({
  selector: 'app-jefe-mantenimiento',
  standalone: true,
  imports: [ModulsModule, FooterComponent],
  templateUrl: './jefe-mantenimiento.component.html',
})
export default class JefeMantenimientoComponent {}
