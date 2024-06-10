# What was hard?

# React!

React is a _library_ (framebrary)

## React !== JSX

JavaScript and XML => Templating language

```js
  ReactDOM.createElement("p", {...})
```

```jsx
  <p>Hey I'm JSX !</p>
  <p className="..." style={{marginTop:"1em"}}>Today's date is {new Date().toLocaleDateString()}</p>
```

## React Rendering Process

1. JSX content (or ReactDOM.createElement..)
2. We will render said content
3. Compare against what is currently there
4. Refresh the page with the new content

React is data driven

Data => React => Create HTML

## React is Component based

## React props!

```jsx
const createUser = (name, email, password, isAdmin, isActive, imagePath) => {
  // ...

  return newUser;
};

createUser("bob", "bob@bob.com", "img/bob1.png", "1234", true, true);

const createUserButBetter = (params) => {
  const { name, email, password, isAdmin, imagePath, isActive } = params;

  // ...
};

const params = {
  isActive: true,
  imagePath: "img/bob1.png",
  isAdmin: true,
  password: "1234",
  name: "bob",
  email: "bob@bob.com",
};

createUserButBetter(params);
```

Props => Properties


```jsx
  <User name="bob" email="bob@bob.com" />

  props => {name:"bob", email:"bob@bob.com"}
```