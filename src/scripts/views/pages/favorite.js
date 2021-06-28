import RestaurantIdb from '../../data/jamfood-db';
import '../../component/list-jamfood';

class Favorite {
  static async render() {
    return `<article id="content">
                <h2 class="-label">Your Favorite Restaurant</h2>
                <h2 class="noFavoriteData">You have no favorite restaurants yet</h2>
                <list-jamfood></list-jamfood>
            </article>
            `;
  }

  static async afterRender() {
    const restaurantList = document.querySelector('list-jamfood');
    const favoriteData = await RestaurantIdb.getAllRestaurant();
    const noFavoriteData = document.querySelector('.noFavoriteData');

    if (favoriteData.length > 0) {
      noFavoriteData.style.display = 'none';
    }

    restaurantList.restaurant = favoriteData;
  }
}

export default Favorite;
