import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { FormsModule } from '@angular/forms'; 
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, AfterViewInit {

  @ViewChildren('pokemonRef') pokemonRef!: ElementRef
  @ViewChild('pokemonTh') pokemonTh!: ElementRef

 
  title: string;
  numberOne: number = 1;
  togglePokemon: boolean = false;

  titleSecond: string = "basker";
  imgSrc: string = "https://media.istockphoto.com/id/842493890/photo/beaver.jpg?s=612x612&w=0&k=20&c=UcBraaIug4HiBU7_cVbhwXIg0GLitSbrgrLDvSOowqo="

  favoriteAnimal: string = "turtle";
  pokemonName: string = "";
  pokemonNameSecond: string = "";


  pokemons!: Pokemon[];


  constructor(private pokemonService: PokemonService, private renderer: Renderer2) {
    this.title = "Nada"
  }

  ngAfterViewInit(): void {
      console.log(this.pokemonRef)
      this.pokemonTh.nativeElement.innerText = "Pokemon Ref used with"
      const div = this.renderer.createElement('div')
      const text = this.renderer.createText('Random Text')
      this.renderer.appendChild(div, text)
      this.renderer.appendChild(this.pokemonTh.nativeElement, div)
  }

  handleClick(value: any) {
    
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
