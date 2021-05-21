import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "vehicle",
    loadChildren: () =>
      import("./modules/vehicle/vehicle.module").then((m) => m.VehicleModule),
  },
  {
    path: "**",
    redirectTo: "/vehicle",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
