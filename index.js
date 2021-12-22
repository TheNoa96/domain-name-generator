var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

let Anystring = [];
for (let i in pronoun)
  for (let b in adj)
    for (let c in noun)
    Anystring.push(pronoun[i] + adj[b] + noun[c] + ".com <br>");
console.log(Anystring);
document.querySelector(".domains") = Anystring;
