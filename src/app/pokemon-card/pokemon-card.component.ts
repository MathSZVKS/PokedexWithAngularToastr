import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemon = '';
  @Input() numberOfDex = 0;

  getImagePokemon(){
    const formated = this.leadingZero(this.numberOfDex);

    return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + formated +'.png';
  }

  getPokemonData(){
    const numberFormat = '001';

    return 'https://assets'
  }

  leadingZero(str: string | number, size = 3): string{
    let s = String(str);

    while (s.length < (size || 2)){
      s = '0' + s;
    }

    return s;
  }
}