const createUser = (userInfo, users) => {
  const { user } = fetchUserByEmail(userInfo.email, users);

  if (user) {
    return { error: "User already exists", user: null };
  }

  const invalidFields = []
  
  Object.keys(userInfo).forEach(key => {
    if(!userInfo[key]){
      invalidFields.push(key)
    }
  })

  if(invalidFields.length){
    return {error: `The followings fields are invalid: ${invalidFields.join(",")}`, user}
  }

  // STRETCH: Check if all inputs are valid

  const newUser = {
    id: String(Object.values(users).length + 1),
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password,
    imagePath: userInfo.imagePath,
  };

  users[newUser.email] = newUser;

  return { error: null, user: newUser };
};

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

const fetchUserById = (userId, users) => {
  const userList = Object.values(users);

  const user = userList.find((user) => user.id === userId);

  if (!user) {
    return { error: "No user with that Id", user: null };
  }
  return { error: null, user };
};

const fetchUserByEmail = (email, users) => {
  const user = users[email];

  if (!user) {
    // Sad!
    return { error: "No user with that email", user: null };
  }

  // Happy!
  return { error: null, user };
};

module.exports = { fetchUserByEmail, fetchUserById, createUser, authenticateUser };
