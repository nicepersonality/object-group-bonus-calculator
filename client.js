const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// loop over the employee array
// use each employee object as the input to the function described below.
// `console.log` the results of each iteration.
let employeesBonuses = [];

function doesCoolStuff() {
  for (person of employees) {
    employeesBonuses.push(generateBonusInfo(person));
  };
};

// Write a declared function that takes in one ** Employee ** object(as an argument to the function), and returns a new ** object ** with the following properties:
// The`name` property should contain the employee's name.
// The`bonusPercentage` property should contain the bonus percentage the employee is to receive.See section below for calculation instructions.
// The`totalCompensation` property should be the adjusted annual compensation(base annual + bonus)
// The`totalBonus` should be the employee's total bonus rounded to the nearest dollar.

// constructor

function EmployeeBonus(name, bonusPercentage, totalCompensation, totalBonus) {
  this.name = name;
  this.bonusPercentage = bonusPercentage;
  this.totalCompensation = totalCompensation;
  this.totalBonus = totalBonus;
}

function generateBonusInfo(employee) {
  let employeeBonusInfo = new EmployeeBonus(
    name = employee.name,
    bonusPercentage = bonusPercentCalc(employee),
    totalCompensation = totalCompensationCalc(employee.annualSalary, this.bonusPercentage),
    totalBonus = totalBonusCalc()
  )

  // 
  return employeeBonusInfo;
};

// ### Individual Bonus calculation
// - Those who have a rating of a 2 or below should not receive a bonus.
// - Those who have a rating of a 3 should receive a base bonus of 4 % of their base annual income.
// - Those who have a rating of a 4 should receive a base bonus of 6 % of their base annual income.
// - Those who have a rating of a 5 should receive a base bonus of 10 % of their base annual income.

// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
//   and should receive an additional 5 %.

// - However, if their annual income is greater than $65, 000, they should have their bonus adjusted down 1 %.
// - No bonus can be above 13 % or below 0 % total.

function bonusPercentCalc(employee) {
  let bonusPercent = 0;

  if (employee.reviewRating <= 2) {
    console.log('No Bonus for You');
  } else if (employee.reviewRating === 3) {
    bonusPercent = .04;
  } else if (employee.reviewRating === 4) {
    bonusPercent = .06;
  } else if (employee.reviewRating === 5) {
    bonusPercent = .1;
  }

  if (employee.employeeNumber.length === 4) {
    bonusPercent += .05;
  }

  if (employee.annualSalary > 65000) {
    bonusPercent -= .01;
  }

  if (bonusPercent > .13) {
    bonusPercent = .13;
  } else if (bonusPercent < 0) {
    bonusPercent = 0;
  }

  return bonusPercent;
}

function totalCompensationCalc(salary, bonusPercent) {
  console.log(salary, bonusPercent);

  return (salary + (salary * bonusPercent));
}

function totalBonusCalc() {

}
console.log(employees);
