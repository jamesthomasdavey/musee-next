import parse from 'html-react-parser';

const ShopItem = (props) => {
  let shopButton;
  if (props.isSoldOut) {
    shopButton = (
      <button disabled>
        Sold Out!
      </button>
    );
  } else {
    shopButton = parse(props.form);
  }

  return (
    <article>
      <img src={props.imageSource} alt="" />
      <h2>{props.title}</h2>
      <span>{props.price}</span>
      {parse(props.shortDescription)}
      {shopButton}
    </article>
  )
}

export default ShopItem;