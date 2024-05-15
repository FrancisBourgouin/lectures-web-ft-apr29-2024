# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

```js
const thievesArr = [thief, thief]; // .find()
const thievesObj = { email: thief, email: thief }; // [key]
```

## Seed

```jsx
const thief1 = {
  id:"1",
  name:"Arsène Lupin",
  email:"gentleman@cambrioleur.com",
  password:"tophat"
  imagePath:"/images/arsene.gif"
}

const thief2 = {
  id:"2",
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"/images/doug.webp"
}


const thieves = {
  "gentleman@cambrioleur.com":thief1,
  "pontiac@bandit.com":thief2
}
```

## Structure

### Helpers!

#### FetchUserByEmail

```jsx
const fetchUserByEmail = (email, users) => {
  const user = users[email];

  if (!user) {
    // Sad!
    return { error: "No user with that email", user: null };
  }

  // Happy!
  return { error: null, user };
};
```

#### FetchUserById

```jsx
const fetchUserById = (userId, users) => {
  const userList = Object.values(users);

  const user = userList.find((user) => user.id === userId);

  if (!user) {
    return { error: "No user with that Id", user: null };
  }
  return { error: null, user };
};
```

#### AuthenticateUser

```jsx
const authenticateUser = (email, password, users) => {
  const { error, user } = fetchUserByEmail(email, users);

  if (error) {
    return { error, user: null };
  }

  if (user.password !== password) {
    return { error: "Passwords don't match :(", user: null };
  }

  return { error: null, user };
};
```

#### CreateUser

```jsx
const createUser = (userInfo, users) => {
  const { user } = fetchUserByEmail(email, users);

  if (user) {
    return { error: "User already exists", user: null };
  }

  // STRETCH: Check if all inputs are valid

  const newUser = {
    id: String(Object.values(users).length + 1),
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password,
    imagePath: userInfo.imagePath,
  };

  users[newUser.id] = newUser;

  return { error: null, user: newUser };
};
```

### HTML


Cognitive load