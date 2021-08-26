function Balanced() {
    input = (prompt("Enter a sentence"));

    open = 0;
    close = 0;

    rev = input.split('');

    for (var i = 0; i < rev.length; i++) {
        if (rev[i] === "(") {
            open++;
        }
        else if (rev[i] === ")") {
            close++;
        }

    }
    if (open === close && (rev[0] === "(" && rev[rev.length - 1] === ")")) {
        return(true);
    }
    else {
        return(false);
    }
}