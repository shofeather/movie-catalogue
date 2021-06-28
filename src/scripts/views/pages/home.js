import RestaurantSource from '../../data/jamfood-source';
import '../../component/list-jamfood';

class HomeMenu {
  static async render() {
    return `
      <section class="jumbotron">
        <img src="heros/hero-image_3.jpg"
        alt="Heroes Image">
        <h1 class="jumbotron-title">Jangan Ganggu Jam Makan Kami!</h1>
      </section>

      <article id="content">
            <h2 class="-label">Restaurants</h2>
            <list-jamfood></list-jamfood>
      </article>
    `;
  }

  static async afterRender() {
    const restaurants = document.querySelector('#content');
    const restaurantsContainer = document.querySelector('list-jamfood');

    try {
      const response = await RestaurantSource.getRestaurantItem();
      restaurantsContainer.restaurant = response;
    } catch (message) {
      restaurants.innerHTML = '<h2>Loading Data Failed! Please Check Your Connection</h2>';
    }
  }
}

export default HomeMenu;
