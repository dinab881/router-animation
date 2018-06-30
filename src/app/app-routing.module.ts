import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KakapoComponent } from './kakapo/kakapo.component';
import { FairyTernComponent } from './fairy-tern/fairy-tern.component';
import { TakaheComponent } from './takahe/takahe.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'kakapo',  },
  { path: 'kakapo', component: KakapoComponent },
  { path: 'takahe', component: TakaheComponent },
  { path: 'fairy-tern', component: FairyTernComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
