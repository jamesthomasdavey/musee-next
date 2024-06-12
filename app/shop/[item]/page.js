const ItemPage = ({ params }) => {
  const { item } = params;
  console.log(params);
  return (
    <div>
      <h1>{item}</h1>
      {/* Render item-specific content here */}
    </div>
  );
}

export default ItemPage