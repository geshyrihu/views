import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModulsModule } from '../../moduls/moduls.module';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [ModulsModule, FooterComponent],
  templateUrl: './administrador.component.html',
})
export default class AdministradorComponent {}
