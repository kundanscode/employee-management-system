import { Component } from '@angular/core';
import { MENU_ITEMS, MenuItem } from '../../../core/models/menu.model';
import { MaterialImportsModule } from '../../../material-imports.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialImportsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isExpanded = false;

  toggleExpand(state: boolean) {
    this.isExpanded = state;
  }

  menuItems: MenuItem[] = MENU_ITEMS;
}
