import { Injectable } from '@angular/core';
import axios, {Axios} from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  
  service: Axios;

  constructor() {
    this.service = axios.create({ baseURL: 'https://pokeapi.co' });
  }

  async getAllPokemon() {
    try {
      const response = await this.service.get('/api/v2/pokemon');
      return response.data.results;
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      return [];
    }
  }

  async getPokemonDetails(id: string) {
    try {
      const response = await this.service.get('/api/v2/pokemon/'+ id);
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
      return null;
    }
  }

}
