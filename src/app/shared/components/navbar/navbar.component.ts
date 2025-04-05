import { Component } from '@angular/core';
import { MaterialImportsModule } from '../../../material-imports.module';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MaterialImportsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  user_name: string | null | undefined;

  constructor(private _auth: AuthService, private router: Router) {
    if (!_auth.getUser()) {
      this.router.navigate(['/login']);
    } else {
      this.user_name = _auth.getUser();
    }
    console.log(this.user_name);
  }
}
