const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let message = '';

    for (let i = 0, j = 0, codedLetter = ''; i <= expr.length; i += 2) {
        if (j === 5) {
            j = 0;
            message += (MORSE_TABLE[codedLetter]) ? MORSE_TABLE[codedLetter] : ' ';
            codedLetter = '';
        }
        const code = expr.substr(i, 2);
        if (code === '11') {
            codedLetter += '-';
        }
        else if (code === '10') {
            codedLetter += '.'
        }
        else if (code === '**') {
            codedLetter += (' ');
        }
        j++;
    }

    return message;
}

module.exports = {
    decode
}
