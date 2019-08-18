
export default function timeToRead(text){
    if(!!text)
    {
    const wordsPerMinute = 200; // Average case.
    let result;
    
    let textLength = text.split(" ").length; // Split by words
    let value = Math.ceil(textLength / wordsPerMinute);
    return value;
    }
    return text;

}