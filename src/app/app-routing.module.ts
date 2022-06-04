import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionBarComponent } from './components/description-bar/description-bar.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: 'list',
    component: TableComponent,
  },

  {
    path: 'list/:id',
    component: DescriptionBarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
