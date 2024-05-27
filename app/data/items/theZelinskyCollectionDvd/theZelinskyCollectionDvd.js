import zelinskyCollectionDvd01 from './img/zelinskyCollectionDvd01.jpg';
import zelinskyCollectionDvd02 from './img/zelinskyCollectionDvd02.jpg';
import zelinskyCollectionDvd03 from './img/zelinskyCollectionDvd03.jpg';
import zelinskyCollectionDvd04 from './img/zelinskyCollectionDvd04.jpg';
import zelinskyCollectionDvd05 from './img/zelinskyCollectionDvd05.jpg';

export default {
  name: 'the-zelinsky-collection-dvd',
  title: 'The Zelinsky Collection on DVD',
  shortDescription: `
    <p>
      A 68 minute dvd video tour featuring highlights of the Musée Mécanique, produced and Directed by Garry Newkirk and Dan Zelinsky.
    </p>
  `,
  longDescription: `
    <p>
      A 68 minute dvd video tour featuring highlights of the Musée Mécanique, produced and Directed by Garry Newkirk and Dan Zelinsky.
    </p>

    <p>
      The world is enriched by men like Edward Galland Zelinsky; collector, restorer, and preserver of fascinating automata... marvelous machines whose only purpose is to amaze and delight. His collection includes hundreds of musical and mechanical machines that bewitch the eye with their beauty and craftsmanship. Some are over a century old, and some so cleverly restored they seem to be ageless.
    </p>
    
    <p>
      Edward's son, Daniel Galland Zelinsky... a fifth generation San Franciscan and a second generation collector... oversees the exhibit, and is a primary force in its expansion. Peep shows (early San Francisco scenes/bawdy comedy), fortune tellers, photo booth, and several games of chance and skill are among the many arcade attractions with several nickelodeons, music boxes and the original mechanical farm. A hand crafted carnival is fully automated... dozens of fascinating attractions and distractions including a sensational 1914 San Francisco exposition gypsy fortune teller. And of course, Laughing Sal. Any worn or broken parts are manufactured on the premises in our machine shop and most repairs are done in house by the Musée Mécanique staff.
    </p>
    
    <p>
      Whether to revisit your childhood memories or to create new ones, this historic collection offers a smile to all ages.
    </p>
  `,
  form: `
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
        <input type="hidden" name="add" value="1">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="business" value="coad01@yahoo.com">
        <input type="hidden" name="item_name" value="The Zelinsky Collection DVD">
        <input type="hidden" name="amount" value="19.95">
        <input type="hidden" name="no_shipping" value="2">
        <input type="hidden" name="no_note" value="0">
        <input type="hidden" name="currency_code" value="USD">
        <input type="hidden" name="ls" value="US">
        <input type="hidden" name="bn" value="PP-ShopCartBF">
      </form>
  `,
  price: '$19.95',
  images: [
    zelinskyCollectionDvd01,
    zelinskyCollectionDvd02,
    zelinskyCollectionDvd03,
    zelinskyCollectionDvd04,
    zelinskyCollectionDvd05
  ]
};
