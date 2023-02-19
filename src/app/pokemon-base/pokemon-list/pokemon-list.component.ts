import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { FormsModule } from '@angular/forms'; 
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

 
  title: string;
  numberOne: number = 1;
  togglePokemon: boolean = false;

  titleSecond: string = "basker";
  imgSrc: string = "https://media.istockphoto.com/id/842493890/photo/beaver.jpg?s=612x612&w=0&k=20&c=UcBraaIug4HiBU7_cVbhwXIg0GLitSbrgrLDvSOowqo="

  favoriteAnimal: string = "turtle";
  pokemonName: string = "";
  pokemonNameSecond: string = "";


  pokemons!: Pokemon[];


  constructor(private pokemonService: PokemonService) {
    this.title = "Nada"
  }

  handleClick(value: any) {
    console.log(value);
  }

  handleChange(event: any) {
    this.pokemonNameSecond = event.target.value
  } 

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data: Pokemon[]) => {
      console.log(data)
      this.pokemons = data;
    })
  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon )=> {
      return pokemon.id !== event.id;
    })
  }

}
