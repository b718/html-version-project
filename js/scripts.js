const request = require("request");
const cheerio = require("cheerio");

var url = "";
var word = "";
var total = 0;

function changeURl() {
  const urlREF = document.getElementById("urlID").value;
  console.log(urlREF);
  url = urlREF;
  console.log(url);
  document.getElementById("urlHeader").innerHTML = "Current URL: " + url;
}

function changeWord() {
  const wordREF = document.getElementById("wordID").value;
  word = wordREF;
  document.getElementById("wordHeader").innerHTML = "Current Word: " + word;
}

function findResults() {
  console.log("in");
  let x = 0;
  request(url, (error, response, html) => {
    if (!error & (response.statusCode == 200)) {
      const $ = cheerio.load(html);

      let test = $("*");

      console.log(test.text());

      test.each((i, el) => {
        if ($(el).text().includes(word)) {
          console.log($(el).text());
          total++;
        }
      });

      console.log(x);
    }
  });
}
