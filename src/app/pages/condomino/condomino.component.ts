import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModulsModule } from '../../moduls/moduls.module';

@Component({
  selector: 'app-condomino',
  standalone: true,
  imports: [ModulsModule, FooterComponent],
  templateUrl: './condomino.component.html',
})
export default class CondominoComponent {}
