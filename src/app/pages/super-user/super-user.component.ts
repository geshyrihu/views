import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModulsModule } from '../../moduls/moduls.module';

@Component({
  selector: 'app-super-user',
  standalone: true,
  imports: [ModulsModule, FooterComponent],
  templateUrl: './super-user.component.html',
})
export default class SuperUserComponent {}
