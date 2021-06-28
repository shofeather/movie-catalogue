import CONFIG from '../data/config';
class DetailJamfood extends HTMLElement {
  set ItemJamfood(item) {
    this._jamfood = item.restaurant;
    this.render();
  }

  getCategories() {
    let categories = '';
    this._jamfood.categories.forEach((item) => {
      categories += `${item.name},`;
    });
    return categories;
  }

  getMakanan() {
    let foods = '<h2>Makanan</h2><div class="menu-section">';
    this._jamfood.menus.foods.forEach((food) => {
      foods += `<li>${food.name}</li>`;
    });
    foods += '</div>';

    return foods;
  }

  getMinuman() {
    let drinks = '<h2>Minuman</h2><div class="menu-section">';
    this._jamfood.menus.drinks.forEach((drink) => {
      drinks += `<li>${drink.name}</li>`;
    });
    drinks += '</div>';

    return drinks;
  }

  getUlasan() {
    let reviews = '<h2>Ulasan</h2>';
    this._jamfood.customerReviews.forEach((review) => {
      reviews += `<div class="review-section">
                    <b>${review.name}</b><br>
                    ${review.date}<br>
                    ${review.review}
                    </div>`;
    });
    return reviews;
  }

  render() {
    this.innerHTML = `
        <article class="jf-detail">
            <div class="jf-header">
                <img class="jf-detail-thumbnail" src="${CONFIG.BASE_IMG_URL + this._jamfood.pictureId}" alt="${this._jamfood.name}">
                <div class="jf-detail-rating">
                    <p>Rating : ⭐️ <span>${this._jamfood.rating}</span></p>
                </div>
            </div>
            <div class="jf-content">
                <h1 class="jf-title">${this._jamfood.name}</h1>
                <h1 class="jf-city">📍 ${this._jamfood.city} | ${this._jamfood.address}</h1>
                <h2>Kategori</h2>
                ${this.getCategories()}
                <h2>Deskripsi</h2>
                <p class="detail-description">${this._jamfood.description}</p>
                ${this.getMakanan()}
                ${this.getMinuman()}
                ${this.getUlasan()}
            </div>
        </article>
      `;
  }

  renderError(message) {
    console.log(message);
    this.innerHTML += '<h3 class="load_failed">Failed to load data!<br>You are offline, please check your internet connection.</h3>';
  }
}

customElements.define('detail-jamfood', DetailJamfood);
