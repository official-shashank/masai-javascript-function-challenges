function highestPaid(employees) {
  return employees.reduce((max, employee) => {
    return employee.salary > max.salary ? employee : max
  })
}

const employees = [
  { name: 'John Doe', age: 30, department: 'HR', salary: 50000 },
  { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
  { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
]

console.log(highestPaid(employees))
