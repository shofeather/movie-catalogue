import UrlParser from '../../routes/url-parser';
import JamfoodSource from '../../data/jamfood-source';
import FavoriteButtonInitiator from '../../utils/favorite-button';
import '../../component/detail-jamfood';

class Detail {
  static async render() {
    return `
        <article id="content">
            <h2 class="-label">Info Selengkapnya</h2>
            <detail-jamfood></detail-jamfood>
            <div id="favoriteButton"></div>
        </article>
    `;
  }

  static async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jamfoodContainer = document.querySelector('detail-jamfood');

    try {
      const restaurant = await JamfoodSource.getRestaurantDetail(url.id);
      jamfoodContainer.ItemJamfood = restaurant;

      await FavoriteButtonInitiator.init({
        favoriteButton: document.querySelector('#favoriteButton'),
        restaurant: restaurant.restaurant,
      });
    } catch (message) {
      jamfoodContainer.renderError(message);
    }
  }
}

export default Detail;
