import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ]
})
export class PokemonBaseModule { }
