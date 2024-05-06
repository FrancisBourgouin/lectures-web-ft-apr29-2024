const chai = require("chai")
const expect = chai.expect
const calculateCart = require("../calculate-cart")

describe("Goes wrong", () => {
  it("should throw an error if an item of the cart has an invalid value", () => {
    const taxPercentage = 15
    const cartWithAnInvalidObject = [
      {
        id:"1",
        name:"Potato",
        icon:"🥔",
        price: 4.99,
        isExpired:true
      },
      {
        id:"1",
        name:"Potato",
        icon:"🥔",
        isExpired:true
      }
    ]

    const expectedErrorMessage = "OH NO. THERE IS SOMETHING WITH ONE OF THE ITEMS!"

    const throwyFunction = () => calculateCart(cartWithAnInvalidObject, taxPercentage)

    expect(throwyFunction).to.throw(expectedErrorMessage)
  })
  it("should throw an error if the tax percentage is missing", () => {

    const cart = [
      {
        id:"1",
        name:"Potato",
        icon:"🥔",
        price: 4.99,
        isExpired:true
      }
    ]

    const expectedOutput = "WHERE'S MY TAXES ?!?!"

    const functionThatWillThrow = () => calculateCart(cart)

    expect(functionThatWillThrow).to.throw(expectedOutput)
  })
  it("should return null if the cart is invalid", () => {
    const taxPercentage = 15
    const invalidCart = "I'M A CART!"

    const result = calculateCart(invalidCart, taxPercentage)

    expect(result).to.be.null
  })
  it("should skip the item if they are invalid", () => {
    const taxPercentage = 15
    const cartWithInvalidItem = [
      {
        id:"1",
        name:"Potato",
        icon:"🥔",
        price: 4.99,
        isExpired:false
      },
      "chicken"
    ]

    const expectedOutput = {
      subtotal:4.99,
      total:5.74,
      tax:0.75,
      amountOfItems:1
    }

    const result = calculateCart(cartWithInvalidItem, taxPercentage)

    expect(expectedOutput).to.deep.equal(result)
  })
})

describe("Goes right", () => {
  it("should return a cartInfo object with everything when the cart is valid and not expired", () => {
    const cart = [
      {
        id:"1",
        name:"Potato",
        icon:"🥔",
        price: 4.99,
        isExpired:false
      },
      {
        id:"2",
        name:"Chicken",
        icon:"🐔",
        price: 9.99,
        isExpired:false
      }      
    ]

    const expectedOutput = {
      subtotal:14.98,
      total:17.23,
      tax:2.25,
      amountOfItems:2
    }

    const result = calculateCart(cart, 15)

    expect(result).to.deep.equal(expectedOutput)
  })
  it("should return a cartInfo object with everything that wasn't expired when the cart is valid", () => {
    const cart = [
      {
        id:"1",
        name:"Potato",
        icon:"🥔",
        price: 4.99,
        isExpired:true
      },
      {
        id:"2",
        name:"Chicken",
        icon:"🐔",
        price: 9.99,
        isExpired:false
      }      
    ]

    const expectedOutput = {
      subtotal:9.99,
      total:11.49,
      tax:1.50,
      amountOfItems:1
    }

    const result = calculateCart(cart, 15)

    expect(result).to.deep.equal(expectedOutput)
  })
})


// Freelancer rule
// No news from the client, means good news from the client
