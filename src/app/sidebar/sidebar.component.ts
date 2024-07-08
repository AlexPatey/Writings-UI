import { Component, viewChild } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [ToolbarComponent, RouterOutlet, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatToolbarModule]
})
export class SidebarComponent {
    public sidenav = viewChild.required<MatSidenav>('sidenav');

    public close(): void {
      this.sidenav().close();
    }

    public open(): void {
      this.sidenav().open();
    }
}
