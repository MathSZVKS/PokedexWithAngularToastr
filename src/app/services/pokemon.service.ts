import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(
    private httpClient: HttpClient) {
    this.loadPokemons();
  }

  async loadPokemons() {
    await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1000').subscribe(
      (data) => {
        this.pokemons = data.results;
      }
    )
  }

  getPokemonByName(pokemon: string){
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/' + pokemon);
  }

}
