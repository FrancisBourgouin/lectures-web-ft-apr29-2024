const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
};

const sanitizeInput = (maybeEvilText) => {
  const $text = $("<p>");

  $text.text(maybeEvilText);

  return $text.text();
};

const generateBlogPost = (postInfo) => {
  const cleanedTitle = sanitizeInput(postInfo.title);
  const cleanedBody = sanitizeInput(postInfo.body);

  return `
    <article>
      <h1>Post #${postInfo.id}: ${cleanedTitle}</h1>
      <p>
        ${cleanedBody}
      </p>
    </article>
  `;
};

const generateBlogPostButBetter = (postInfo) => {
  const $post = $("<article>"); // document.createElement("article")
  const $title = $("<h1>");
  const $body = $("<p>");

  $title.text(`Post #${postInfo.id}: ${postInfo.title}`);
  $body.text(postInfo.body);

  $post.append($title);
  $post.append($body);

  $post.on("click", (event) => {
    $(event.currentTarget).css("background-color", generateRandomColor());
  });

  $post.addClass(postInfo.id % 2 === 0 ? "even" : "odd");

  return $post;
};

const addAllPosts = (posts, isAppending, isTop) => {
  if (!isAppending) {
    $(".posts").empty();
  }

  for (const post of posts) {
    // const result = generateBlogPost(post);
    const result = generateBlogPostButBetter(post);

    if (isTop) {
      $(".posts").prepend(result);
    } else {
      $(".posts").append(result);
    }
  }
};

const fetchPosts = () => {
  return $.get("https://jsonplaceholder.typicode.com/posts");
  // return $.ajax({
  //   method:"GET",
  //   url:"https://jsonplaceholder.typicode.com/posts"
  // })
};

const addPost = (formData) => {
  return $.post("https://jsonplaceholder.typicode.com/posts", formData)
}