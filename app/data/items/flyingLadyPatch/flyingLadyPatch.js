import flyingLadyPatch01 from './img/flyingLadyPatch01.jpeg';

export default {
  name: 'flying-lady-patch',
  title: 'Flying Lady Patch',
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
      Dimensions: 3 ½ x 4 ⅛ inches.
    </p>
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4RKn5xAYxg0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `,
  form: `
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="QZ8S7UJBGMN7S">
      <input type="submit" name="submit" class="addToCartButton" value="Add to Cart">
    </form>
  `,
  price: '$35.00',
  isSoldOut: false,
  images: [flyingLadyPatch01],
};
