const checkIfInvalidItem = (item) => {
  return (
    typeof item.price !== "number" ||
    typeof item.name !== "string" ||
    typeof item.icon !== "string" ||
    typeof item.id !== "string" ||
    typeof item.isExpired !== "boolean"
  );
};

const roundInCents = (number) => {
  return Math.round(number * 100) / 100
}

const calculateCart = function (cart, taxPercentage) {
  const cartInfo = {
    subtotal: 0,
    amountOfItems: 0,
  };

  if (!Array.isArray(cart)) {
    return null;
  }

  if (!taxPercentage && taxPercentage !== 0) {
    throw new Error("WHERE'S MY TAXES ?!?!");
  }

  for (const item of cart) {
    if (typeof item === "object") {
      if (checkIfInvalidItem(item)) {
        throw new Error("OH NO. THERE IS SOMETHING WITH ONE OF THE ITEMS!");
      }

      if(!item.isExpired){
        cartInfo.subtotal += item.price;
        cartInfo.amountOfItems++
      }
    }
  }

  cartInfo.tax = roundInCents(cartInfo.subtotal * (taxPercentage / 100));

  cartInfo.total = roundInCents(cartInfo.tax + cartInfo.subtotal);

  return cartInfo;
};

module.exports = calculateCart;
