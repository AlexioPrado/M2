// Javascript Code goes here
console.log("Jank Boteko 💖 Didi")
console.log(document) // Document == <html>...</html>
// console.dir(document)

// Alerts //
//alert('JANK BOTEKO 4 LIFE') // Textbox pop up
//window.onload = function() {
//    alert(`JANK BOTEKO WILL FIND YOU`)
//}

//const student = prompt("What is your name?")
//console.log('Student = ' + student)
// Writes to document, but does not work with script defer
//document.write(`<p> Hello, ${student}! </p>`)

// modern web dev standard
//const student = prompt('What\'s your name?')
//const messageElement = document.createElement("p");
//messageElement.textContent = `Hello, ${student}!`;
//document.body.appendChild(messageElement)

//document.getElementById('myH1').textContent = 'I love Jank Boteko';
//document.getElementById('myParagraph').textContent = 'HEYYYYY';


// styling pages
//document.body.style.color = 'white'
//document.body.style.backgroundColor = 'lightBlue'
//document.body.style.fontSize = '2em'

//Event Listeners//
document.getElementById('myH1').addEventListener("click", function(){
    // function details go here.
    document.getElementById("myH1").style.color = 'pink'
});
document.getElementById('myH1').addEventListener('mouseover', function(){
    document.getElementById('myH1').style.color = 'lightBlue'
});
document.getElementById('myParagraph').addEventListener('dblclick', function(){
    document.getElementById('myParagraph').style.fontSize = '2em'
});
document.getElementById('myB').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
    document.getElementById('myParagraph').style.color = 'white'
});

