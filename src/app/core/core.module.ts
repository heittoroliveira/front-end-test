import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { ErrorsComponent } from "./errors/errors.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ErrorsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent],
})
export class CoreModule {}
