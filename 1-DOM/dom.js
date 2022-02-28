function manipulateDom() {
  let quotes = document.querySelectorAll(".quote");
  quotes.forEach((quote) => {
    quote.style.border = "1px solid blue";
    quote.style.background = "lightblue";
    quote.style.fontStyle = "italic";
  });
}

export { manipulateDom };
