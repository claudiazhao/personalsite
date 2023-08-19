const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (menu._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "string") {
      return (menu._price = priceToCheck);
    }
  },
  get todaysSpecial() {
    if (menu._meal & menu._price) {
      return `Today's Special is ${_meal} for ${_price}`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};
menu._meal = 24;
menu._price = "Claudia";

console.log(menu.todaysSpecial);
