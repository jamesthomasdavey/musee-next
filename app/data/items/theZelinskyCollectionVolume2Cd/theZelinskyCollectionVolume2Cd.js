// img
import volumeTwo01 from './img/volumeTwo01.jpg';
import volumeTwo02 from './img/volumeTwo02.jpg';
import volumeTwo03 from './img/volumeTwo03.jpg';
import volumeTwo04 from './img/volumeTwo04.jpg';

// audio
// import tennesseeWaltz from './audio/tennesseeWaltz.m4a';

export default {
  name: 'the-zelinsky-collection-volume-2-cd',
  title: 'The Zelinsky Collection: Vol. 2',
  // audio: tennesseeWaltz,
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
      <input type="hidden" name="item_name" value="The Zelinsky Collection Volume 2 CD">
    </form>
  `,
  price: '$10.00',
  images: [volumeTwo01, volumeTwo02, volumeTwo03, volumeTwo04],
};
