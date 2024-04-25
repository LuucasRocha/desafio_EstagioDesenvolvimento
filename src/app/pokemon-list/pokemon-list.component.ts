import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: any[] = [];
  allPokemon: any[] = [];
  @Output() pokemonSelected = new EventEmitter<any>();

  constructor(
    private pokeapiService: PokemonApiService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.allPokemon = await this.pokeapiService.getAllPokemon();
    this.pokemonList = await this.pokeapiService.getAllPokemon();
  }

  showDetails(url: string) {
    const id = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    this.router.navigate([`/pokemon-details`], { queryParams: { pokemonUrl: id } });
    this.pokemonSelected.emit(url);
  }

  searchPokemon(event: Event) {
    console.log("qualquercoisa")
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.pokemonList = this.allPokemon.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query)
    );
    console.log(this.pokemonList);

  }

}
