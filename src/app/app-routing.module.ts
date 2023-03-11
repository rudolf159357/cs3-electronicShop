import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './views/home/home.component';
import { IphonesComponent } from './views/iphones/iphones.component';
import { MacbooksComponent } from './views/macbooks/macbooks.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { PhonesComponent } from './views/phones/phones.component';
import { TableComputersComponent } from './views/table-computers/table-computers.component';
import { TvComponent } from './views/tv/tv.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "tv", component: TvComponent},
  {path: "smartphones", component: PhonesComponent},
  {path: "iphones", component: IphonesComponent},
  {path: "notebooks", component: NotebooksComponent},
  {path: "macbooks", component: MacbooksComponent},
  {path: "table_computers", component: TableComputersComponent},
  {path: "details", component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
