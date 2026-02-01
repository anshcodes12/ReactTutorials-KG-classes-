const ErrorMessage = () => {
  let foodItems = [
    "Milk",
    "Honey",
    "Pomegranate",
    "Banana",
    "Walnut",
    "Almond",
    "Tofu",
    "Ramen",
  ];
  return <>{foodItems.length === 0 && <h3>I am very hungry</h3>}</>;
};

export default ErrorMessage;
