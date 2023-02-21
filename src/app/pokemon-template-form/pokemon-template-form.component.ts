import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] =[
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'Water'
    }
]
  constructor(private pokemonService:PokemonService) {}

  toggleIsCool(object: any) {
    console.log(object)
  }

  ngOnInit() {
    this.pokemonService.getPokemons(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    })
  }

}
