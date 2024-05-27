import piratePatch01 from './img/piratePatch01.jpeg';

export default {
  name: 'pirate-patch',
  title: 'Pirate Patch',
  shortDescription: `
    <p>
    All our bullion emblems are handmade, each stitch embroidered with gold or silver bullion.
    </p>
  `,
  longDescription: `
    <p>
    All our bullion emblems are handmade, each stitch embroidered with gold or silver bullion. These are not to be confused with standard embroidered emblems. These wire bullion emblems are made by craftsmen recognized worldwide as masters in this field. The quality is superior and you are sure to be pleased with your purchase.
    </p>
    <p>
      Dimensions: 4 ½ x 4 ⅛ inches.
    </p>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="LPJKJRY5VY7VA">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
    </form>
  `,
  price: '$35.00',
  isSoldOut: false,
  images: [piratePatch01],
};
