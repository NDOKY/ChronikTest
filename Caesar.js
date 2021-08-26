function encodeCaesar() {
    input = (prompt("Enter a word"));
    key = (prompt("Enter a key"));
    rev = input.split('');
    alert(rev);
    key = parseInt(key);

    for (let index = 0; index < rev.length; index++) {
        rev[index] = String.fromCharCode(rev[index].charCodeAt() + key);
    }
    return rev.join('');
}