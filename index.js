const badWords = [
  "zoom",
  "channel",
  "galvanize",
  "mcsp",
  "Garrett",
  "Ross",
  "incompetent",
  "unfunny",
];

const userPost = [
  "I really enjoyed participating in the Galvanize Operation Level Up program with MCSP-12. However, we had this real nut case for an instructor. His name is Garrett Ross. He was really unfunny and although he seemed smart, he was totally incompetent. He didn't know it but everyone used to make fun of him during zoom calls and in the Discord channel. What a loser!",
];

// const h1 = document.querySelector(".user_post");

// console.log(h1);

// const test = new RegExp(`/${badWords[0]}/`, "gi");

// console.log(test);

const censorBadWords = () => {
  let wordArr = [];

  for (let i = 0; i < badWords.length; i++) {
    let placeHolder = badWords[i];
    if (i === 0) {
      wordArr = userPost[0].split(placeHolder).join(changeWord(placeHolder));
    } else {
      wordArr = wordArr.split(placeHolder).join(changeWord(placeHolder));
    }
  }

  console.log(wordArr);
  //   return wordArr;
};

const changeWord = (placeHolder) => {
  const word = placeHolder.split("");
  for (let i = 0; i < word.length; i++) {
    if (i > 0) {
      word[i] = "-";
    }
  }
  return word.join("");
};

console.log(censorBadWords());
