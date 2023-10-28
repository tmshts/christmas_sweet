const Ingredients = ({ ingredients }) => {
    return (
      <>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
      </>
    )
}

export default Ingredients