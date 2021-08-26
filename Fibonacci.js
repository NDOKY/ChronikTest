i = 0;
input = (prompt("Enter the fibonacci number you want "));
while (i < input) {
    document.writeln(fiboRecursive(i));
    i++;
}
function fiboRecursive(fiboNumber) {
    if (fiboNumber === 0 || fiboNumber === 1) {
        return fiboNumber;
    }
    else {
        return fiboRecursive(fiboNumber - 1) + fiboRecursive(fiboNumber - 2);
    }
}
