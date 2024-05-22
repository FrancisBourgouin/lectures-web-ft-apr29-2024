// What does AJAX means ?
// Asynchronous JavaScript And XML

// JSON => JavaScript Object Notation
// XML  => eXtensible Markup Language => HTML is a subset of XML

// AJAX => Cleaning Product / Tough on grease
// AJAX => Greek History / Mythology / Tough on greece

// $(document).on("ready", () => {
//   const result = generateBlogPost(somePosts[0])

//   $(".posts").append(result)
// })

// $(() => {
//   const result = generateBlogPost(somePosts[0])

//   $(".posts").append(result)
// })

$(document).ready(() => {
  // addAllPosts(somePosts, false);
  // addAllPosts(somePosts, true);
  $("form").on("submit", (event) => {
    event.preventDefault();

    const formData = $(event.target).serialize();

    addPost(formData)
      .then((res) => {
        addAllPosts([res], true, true);
      })
      .catch((err) => console.log(err));
  });

  fetchPosts()
    .then((postData) => addAllPosts(postData, false))
    .catch((err) => console.log("OH NO", err));
});










