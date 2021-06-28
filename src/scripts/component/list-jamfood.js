import './item-jamfood';

class ListJamfood extends HTMLElement {
  set restaurant(list) {
    this._list = list;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._list.forEach((restaurant) => {
      const restaurantElement = document.createElement('item-jamfood');
      restaurantElement.ItemJamfood = restaurant;

      this.appendChild(restaurantElement);
    });
  }
}

customElements.define('list-jamfood', ListJamfood);
