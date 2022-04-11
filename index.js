// Write your code here!
let main = document.getElementById('main')
main.remove();
let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = "Brody Losh is the champion"
document.body.append(newHeader)