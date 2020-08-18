let stringToSearch = ["Javascript", "Python", "React", "Node", "HTML"];

let frase = "aprenderei x";
const replaceString = (frase, replacer) => frase.replace("x", replacer);

frase = replaceString(frase, 'essas linguagens');

const joinHabilities = (frase, stringToSearch) => {
    return `${frase} : ${stringToSearch.join(' ',',')}`
}
console.log(joinHabilities(frase,stringToSearch));
