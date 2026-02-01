const FoodItems = () => {
let foodItems = [
    "Milk",
    "Honey",
    "Pomegranate",
    "Banana",
    "Walnut",
    "Almond",
    "Tofu",
    "Ramen"
  ];

  return (
    <>
      <ul class="list-group">
        {foodItems.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
