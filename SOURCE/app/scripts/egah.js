window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1) {
    console.error("Script Error: See Browser Console for Detail");
  } else {
    var message = [
      "Message: " + msg,
      "URL: " + url,
      "Line: " + lineNo,
      "Column: " + columnNo,
      "Error object: " + JSON.stringify(error),
    ].join(" - ");

    document.body.innerHTML += message;
  }

  return false;
};
