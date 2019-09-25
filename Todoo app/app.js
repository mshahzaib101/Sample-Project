function myFunc(fieldID, setField) {
var getInputValue = 
document.getElementById(fieldID).value
document.getElementById(setField).value = getInputValue
console.log(getInputValue)
}




function myFucntion() {
    var getInput = document.getElementById('inputField').value
    var newTag = document.createElement('LI')
    var tagText = document.createTextNode(getInput)
    newTag.appendChild(tagText)
    document.getElementById('list').appendChild(newTag)
    getInput= "";
}
