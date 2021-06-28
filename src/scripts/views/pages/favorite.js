import RestaurantIdb from '../../data/jamfood-db';
import '../../component/list-jamfood';

class Favorite {
  static async render() {
    return `<article id="content">
                <h2 class="-label">Restoran Favorit Anda</h2>
                <h2 class="noFavoriteData">Anda Belum Menambahkan Data Pada Favorit</h2>
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
