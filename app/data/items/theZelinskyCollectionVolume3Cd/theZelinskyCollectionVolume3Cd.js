// audio
// import skatersWaltz from './audio/skatersWaltz.m4a';

// img
import volumeThree01 from './img/volumeThree01.jpg';
import volumeThree02 from './img/volumeThree02.jpg';
import volumeThree03 from './img/volumeThree03.jpg';
import volumeThree04 from './img/volumeThree04.jpg';

export default {
  name: 'the-zelinsky-collection-volume-3-cd',
  title: 'The Zelinsky Collection: Vol. 3',
  // audio: skatersWaltz,
  shortDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
    </p>
    <p>
      28 tracks.
    </p>
  `,
  longDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique at the historic Cliff House in San Francisco.
    </p>
    <p>
      28 tracks.
    </p>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="P5XCN9E3T34WJ">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
      <input type="hidden" name="item_name" value="The Zelinsky Collection Volume 3 CD">
    </form>
  `,
  price: '$10.00',
  images: [volumeThree01, volumeThree02, volumeThree03, volumeThree04],
};
