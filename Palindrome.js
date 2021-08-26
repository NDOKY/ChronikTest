function palindromeFunction() {

    input = (prompt("Enter a sentence"));

    rev = input.split('').reverse().join('');

    if (input === rev) {
        return("true");
    }
    else {
        return("false");
    }
}