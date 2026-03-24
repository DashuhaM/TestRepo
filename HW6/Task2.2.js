function checkAge(age) {
    const isAdult = age >= 18;
    if (isAdult) { return "True"; }
    else { return "False";  }
};

console.log(checkAge(25));