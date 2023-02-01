import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  togglePokemon: boolean = false;

  titleSecond: string = "basker";
  imgSrc: string = "https://media.istockphoto.com/id/842493890/photo/beaver.jpg?s=612x612&w=0&k=20&c=UcBraaIug4HiBU7_cVbhwXIg0GLitSbrgrLDvSOowqo="

  favoriteAnimal: string = "turtle";
  pokemonName: string = "";

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


  constructor() {
    this.title = "Nada"
  }

  handleClick(value: any) {
    console.log(value);
  }
}
