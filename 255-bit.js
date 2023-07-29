/**
 Author: Revelation.AF
 Git: nusktec
 **/
//convert char(s) to ASCII - first [0-255]
function _strAsciiArray(string) {
    //check for an empty string
    if (!string || string.length === 0)
        return []
    //continue
    let strArray = []
    string.split("").forEach(c => {
        //handle single char here
        strArray.push(c.charCodeAt(0))
    })
    return strArray
}

//convert ascii to char(s)
function _asciiString(stringArr) {
    //check for an empty string
    if (!stringArr || stringArr.length === 0)
        return []
    //continue
    let strArray = []
    stringArr.forEach(c => {
        //handle single char here
        strArray.push(String.fromCharCode(parseInt(c)))
    })
    return strArray.join("")
}

//salt and sugar functions
function _saltGen(s) {
    if (!s || s.length === 0)
        return 0
    let tmpChar = 0
    s.split("").map(s => {
        //get ascii number
        tmpChar += s.toString().charCodeAt(0)
    })
    return tmpChar
}

//shifting method
function _shifter(asciiArr, number, unshift = false) {
    if (!asciiArr || asciiArr.length === 0)
        return []
    if (unshift)
        //unshift ascii codes
        return asciiArr.map(d => d - number)
    //shift ascii codes
    return asciiArr.map(d => d + number)
}

//encryption method
function encrypt(data, salt, isNumber = false) {
    return _asciiString(_shifter(_strAsciiArray(data), _saltGen(salt)))
}

function decrypt(enData, salt, isNumber = false) {
    return _asciiString(_shifter(_strAsciiArray(enData), _saltGen(salt), true))
}

console.log(decrypt("ëùõùç¦õñõøõ", "!23"))
module.export = []