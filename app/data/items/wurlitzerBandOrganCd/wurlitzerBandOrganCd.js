// img
import wurlitzerCd01 from './img/wurlitzerCd01.jpg';
import wurlitzerCd02 from './img/wurlitzerCd02.jpg';

// audio
// import surfinSafari from './audio/surfinSafari.m4a';

export default {
  name: 'wurlitzer-band-organ-cd',
  title: 'The Mighty Wurlitzer: Military Band Organ',
  // audio: surfinSafari,
  shortDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique.
    </p>
    <p>
      20 tracks.
    </p>
  `,
  longDescription: `
    <p>
      Antique, coin-operated, automatic mechanical musical instruments. Recorded live inside the Musée Mécanique.
    </p>
    <p>
      20 tracks.
    </p>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="P5XCN9E3T34WJ">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
      <input type="hidden" name="item_name" value="Wurlitzer Band Organ CD">
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
  `,
  price: '$10.00',
  images: [wurlitzerCd01, wurlitzerCd02],
};
