# Shopping Cart !

Takes in an array of items, and will list subtotal, total, tax, amount of items

INPUT: Array of items, What is item?
OUTPUT: subtotal, total, tax, amount of items return a structure

# Data structures (Start with the end of the line)

## Item

Array: 0
Object: EVERYONE

```jsx
const item = {
  id:"1",
  name:"Potato"
  icon:"🥔",
  price: 4.99,
  isExpired:true
}

const item = {
  id: STRING
  name: STRING
  icon: STRING
  price: NUMBER
  isExpired: BOOLEAN
}
```

## Cart

A structure containing our items! A collection of independent items
How do we manage quantity

Array: Prefereable
Object: Still work

```jsx
const cartArr = [{ info: item, quantity: 1 }, item, item];

const cartArrAgain = [item1, item1, item2, item3, item3, item3, "item4"];

// const cartObj = { 1: { item, quantiy: 1 } };
```

## TaxPercentage

```jsx
  const taxPercentage = 15
```

## CartInformation

subtotal, total, tax, amount of items

```jsx
const cartInfo = {
  subtotal: NUMBER, // rounded to the cent (in dollars)
  total: NUMBER, // rounded to the cent (in dollars)
  tax: NUMBER, // rounded to the cent (in dollars)
  amountOfItems: NUMBER,
};


const doubleUp = (value) => value * 2
```

## taxAmount

## What if?

### Goes wrong

- An item could have invalid / or missing values
- Invalid cart (text, null, object)
- Cart with an invalid item

### Goes right

- Given a proper cart with everything being not expired, then we should have a valid cartInfo object
- Given a proper cart with everything, then we should have a valid cartInfo object where the expired items are skipped
