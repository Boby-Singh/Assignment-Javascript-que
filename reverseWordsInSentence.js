const reverseWordsInSentence=(str)=> {
  const words = str.split(' ');
  let reversedSentence = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reversedWord = word.split('').reverse().join('');
    reversedSentence += reversedWord;

    if (i < words.length - 1) {
      reversedSentence += ' ';
    }
  }

  return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
