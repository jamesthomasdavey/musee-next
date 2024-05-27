import laughingSalPatch01 from './img/laughingSalPatch01.jpeg';

export default {
  name: 'laughing-sal-patch',
  title: 'Laughing Sal Patch',
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
      Dimensions: 6 ⅛ x 4 ¼ inches.
    </p>
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4RKn5xAYxg0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="NWTWFNZC443C4">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
    </form>
  `,
  price: '$35.00',
  isSoldOut: false,
  images: [laughingSalPatch01],
};
