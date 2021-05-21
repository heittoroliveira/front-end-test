import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VehicleComponent } from "./vehicle.component";

const routes: Routes = [
  {
    path: "",
    component: VehicleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
