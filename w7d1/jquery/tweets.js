const createErrorMessage = function (errorMessage) {
  const $error = $("<div>");
  const $p = $("<p>");
  const $icon = $("<i>");

  $error.addClass("new-tweet-error");
  $icon.addClass("fa-solid fa-triangle-exclamation fa-xl");

  $p.text(errorMessage);

  $error.append($icon);
  $error.append($p);

  return $error;
};

const createTweetElement = function (tweetdata) {
  const $tweet = $("<div>");

  const $header = $("<header>");
  const $profile = $("<img>");
  const $handle = $("<h1>");
  const $name = $("<h2>");

  $profile.attr("src", tweetdata.user.avatar_url);
  $handle.text(tweetdata.user.handle);
  $name.text(tweetdata.user.name);

  $header.append($profile);
  $header.append($handle);
  $header.append($name);

  const $text = $("<p>");

  $text.text(tweetdata.content);

  const $footer = $("<footer>");
  const $created = $("<p>");
  const $icons = $("<div>");
  const $flag = $("<i>");
  const $like = $("<i>");
  const $share = $("<i>");

  $created.text(tweetdata.created_at);
  $flag.addClass("fa-solid fa-flag");
  $like.addClass("fa-solid fa-like");
  $share.addClass("fa-solid fa-share");

  $icons.append($flag);
  $icons.append($like);
  $icons.append($share);

  $footer.append($created);
  $footer.append($icons);

  $tweet.append($header);
  $tweet.append($text);
  $tweet.append($footer);
  return element;
};

const renderTweets = function (tweets) {
  for (const value of tweets) {
    const $tweet = createTweetElement(value);
    $(".tweets-container").prepend($tweet);
  }
};
