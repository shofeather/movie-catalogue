import CONFIG from '../data/config';
class ItemJamfood extends HTMLElement {
  set ItemJamfood(restaurant) {
    this._jamfood = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="item">
      <div class="jf-header">
          <img class="jf-thumbnail" src="${CONFIG.BASE_IMG_URL + this._jamfood.pictureId}" alt="${this._jamfood.name}">
          <div class="jf-rating">
              <p>Rating: ⭐️ ${this._jamfood.rating}</span></p>
          </div>
      </div>
      <div class="jf-content">
          <p class="jf-title"><a href="${`/#/detail/${this._jamfood.id}`}">${this._jamfood.name}</a></p>
          <p class="jf-city">📍 ${this._jamfood.city}</p>
          <p class="jf-description">${this._jamfood.description}</p>
          <p class="button"><a href="${`/#/detail/${this._jamfood.id}`}"><span>Selengkapnya</span></a></p>
      </div>
      </article>
      `;
  }
}

customElements.define('item-jamfood', ItemJamfood);
