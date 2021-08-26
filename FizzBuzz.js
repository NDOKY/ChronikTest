function fizzBuzzFunction(input) {
    input = (prompt("Own many FizzBuzz do you want???"));
    fizzBuzzArray = [];

    for (let index = 0; index <= input; index++) {
        fizzBuzzArray[index] = index;

        if (index % 3 === 0) {
            fizzBuzzArray[index] = "Fizz";
        }
        else if (index % 5 === 0) {
            fizzBuzzArray[index] = "Buzz";
        }
        if (index % 3 === 0 && index % 5 === 0) {
            fizzBuzzArray[index] = "FizzBuzz";
        }

    }

    return fizzBuzzArray;

}
