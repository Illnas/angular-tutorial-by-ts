import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [{
    id: 1,
    name: 'pikachu',
    type: 'electric',
    isCool: false,
    isStylish: true,
  },
  {
    id: 2,
    name: 'squirtle',
    type: 'water',
    isCool: true,
    isStylish: false,
  },
  {
    id: 3,
    name: 'charmander',
    type: 'fire',
    isCool: false,
    isStylish: true,
  }]

  title: string;
  numberOne: number = 1;
  togglePokemon: boolean = false;

  titleSecond: string = "basker";
  imgSrc: string = "https://media.istockphoto.com/id/842493890/photo/beaver.jpg?s=612x612&w=0&k=20&c=UcBraaIug4HiBU7_cVbhwXIg0GLitSbrgrLDvSOowqo="

  favoriteAnimal: string = "turtle";
  pokemonName: string = "";
  pokemonNameSecond: string = "";



  constructor() {
    this.title = "Nada"
  }

  handleClick(value: any) {
    console.log(value);
  }

  handleChange(event: any) {
    this.pokemonNameSecond = event.target.value
  } 

  ngOnInit(): void {
    console.log("ngOnitFired")
  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon )=> {
      return pokemon.id !== event.id;
    })
  }

}
