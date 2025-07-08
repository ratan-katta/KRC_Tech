import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
    private items: Item[] = [];
  private idCounter = 1;

  getItems(): Item[] {
    return this.items;
  }

  getItem(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }

  addItem(item: Item): void {
    item.id = this.idCounter++;
    this.items.push(item);
  }

  updateItem(updatedItem: Item): void {
    const index = this.items.findIndex(i => i.id === updatedItem.id);
    if (index > -1) this.items[index] = updatedItem;
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(i => i.id !== id);
  }
}
