const Ingredients = ({ dulce_ingredients }) => {
    return (
      <>
        <ul>
          {dulce_ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
      </>
    )
}

export default Ingredients