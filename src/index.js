// Your task is to implement solveEquation function, wihch solves Quadratic equation.
// Each equality has exact 2 integer solutions. Return those numbers as ordered array.
//
// Example:
//
//     const solutions = solveEquation('2 * x^2 - 10 * x + 12');
// console.log(solutions); // [2, 3]


module.exports = function solveEquation(equation) {
  // your implementation
    let eqArr = equation.split(" ");
        let a = eval(eqArr[0]);
        let b = (eqArr[3] === "-")? (eval(eqArr[4])*-1) : eval(eqArr[4]);
        let c = (eqArr[7] === "-")? (eval(eqArr[8])*-1) : eval(eqArr[8]);
        let d = (b*b)-4*a*c;
        let sqD = Math.sqrt(d);
        let x = (-b)/(2*a);
        let x1 = Math.round(((-b)+sqD)/(2*a));
        let x2 = Math.round(((-b)-sqD)/(2*a));
        let solutions = [];
    d === 0 ? (solutions.push(x)) : (d > 0 ? (solutions.push(x1,x2)) : "No roots");
    return solutions.sort(function (a,b) {
        return a-b;
    })
};
