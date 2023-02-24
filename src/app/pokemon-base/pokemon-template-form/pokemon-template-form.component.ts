import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemon, PokemonType } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css'],
})
export class PokemonTemplateFormComponent {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'Fire',
    },
    {
      key: 1,
      value: 'Water',
    },
  ];
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  toggleIsCool(object: any) {
    console.log(object);
  }

  handleSubmit(object: any) {
    console.log(object);
  }

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      this.pokemonService.getPokemons(1).subscribe((data: Pokemon) => {
        this.pokemon = data;
      });
    });
  }

  back():void {
    this.router.navigate(['/pokemon'])
  }


}



