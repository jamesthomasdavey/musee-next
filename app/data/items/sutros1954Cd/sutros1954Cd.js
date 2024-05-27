// audio
// import frenchOrgan from './audio/frenchOrgan.m4a';

// img
import sutros1954Cd01 from './img/sutros1954Cd01.jpg';
import sutros1954Cd02 from './img/sutros1954Cd02.jpg';
import sutros1954Cd03 from './img/sutros1954Cd03.jpg';

export default {
  name: 'sutros-1954-cd',
  title: `Sutro's: San Francisco, 1954`,
  // audio: frenchOrgan,
  shortDescription: `
    <p>
      The musical instruments featured in this recording were from the Musical Museum in the collection of George Whitney, owner of Sutro's at the Beach in San Francisco, "a museum that has devoted itself to the color and background of 'the good old days'".
    </p>
  `,
  longDescription: `
    <p>
    The musical instruments featured in this recording were from the Musical Museum in the collection of George Whitney, owner of Sutro's at the Beach in San Francisco, "a museum that has devoted itself to the color and background of 'the good old days'".
    </p>
    <p>
      The recordings from the Musical Museum were made in 1954 by an all night staff announcer for a Bay Area radio station named Al Leavitt who desired to preserve the sound of these rare old machines. "the juke boxes of their day", to delight and charm further generations.
    </p>
    <p>
      Produced for CD from original LP by Dan Zelinsky.
    </p>
    <p>
      39 minutes.
    </p>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="A4EU8JS7ENRXU">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
      <input type="hidden" name="item_name" value="Sutro's 1954 CD">
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
  `,
  price: '$15.00',
  images: [sutros1954Cd01, sutros1954Cd02, sutros1954Cd03],
};
