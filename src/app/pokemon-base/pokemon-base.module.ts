import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FormsModule } from "@angular/forms";
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import {RouterModule, Routes} from '@angular/router'
import { HighlighttextDirective } from '../_directives/highlighttext.directive';
import { CustomifDirective } from '../_directives/customif.directive';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: PokemonListComponent},
      {path: ':id', component: PokemonTemplateFormComponent},

    ]
  }
]

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent,
    HighlighttextDirective,
    CustomifDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [HighlighttextDirective, CustomifDirective]
})
export class PokemonBaseModule { }
