import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModulsModule } from '../../moduls/moduls.module';

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [ModulsModule, FooterComponent],
  templateUrl: './supervisor.component.html',
})
export default class SupervisorComponent {}
