export default function cutWords(text, maxLenght) {
  var resultText = text;
  if (text.length > maxLenght) {
    resultText = text.substr(0, 75);
    resultText =
      text.substr(0, Math.min(resultText.length, resultText.lastIndexOf(" "))) +
      " ...";
  }
  return resultText;
}
