import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { HeroComponent } from './hero.component';
import { StudioComponent } from './studio.component';
import { WorkComponent } from './work.component';
import { ApproachComponent } from './approach.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root', standalone: true, imports: [HeaderComponent, HeroComponent, StudioComponent, WorkComponent, ApproachComponent, ContactComponent, FooterComponent], templateUrl: './app.component.html'
})
export class AppComponent {}
