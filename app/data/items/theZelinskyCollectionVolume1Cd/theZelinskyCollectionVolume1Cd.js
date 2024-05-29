// audio
// import theCrazyRag from './audio/theCrazyRag.m4a';

// img
import volumeOne01 from './img/volumeOne01.jpg';
import volumeOne02 from './img/volumeOne02.jpg';
import volumeOne03 from './img/volumeOne03.jpg';
import volumeOne04 from './img/volumeOne04.jpg';

export default {
  name: 'the-zelinsky-collection-volume-1-cd',
  title: 'The Zelinsky Collection: Vol. 1',
  // audio: theCrazyRag,
  shortDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
    </p>
    <p>
      27 tracks.
    </p>
  `,
  longDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
    </p>
    <p>
      27 tracks.
    </p>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="P5XCN9E3T34WJ">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
      <input type="hidden" name="item_name" value="The Zelinsky Collection Volume 1 CD">
    </form>
  `,
  price: '$10.00',
  images: [volumeOne01, volumeOne02, volumeOne03, volumeOne04],
};
