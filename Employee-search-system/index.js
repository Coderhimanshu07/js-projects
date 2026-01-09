
class Employee {
    constructor(name, age, empid) {
        this.name = name;
        this.age = age;
        this.empid = empid;
    }

    introduce() {
        return `Name: ${this.name}, Age: ${this.age}, empid: ${this.empid}`;
    }
}

class Staff extends Employee {
    constructor(name, age, empid, position, department, salary) {
        super(name, age, empid);
        this.position = position;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `
          <strong>Name:</strong> ${this.name}<br>
          <strong>Age:</strong> ${this.age}<br>
          <strong>Employee ID:</strong> ${this.empid}<br>
          <strong>Position:</strong> ${this.position}<br>
          <strong>Department:</strong> ${this.department}<br>
          <strong>Salary:</strong> ₹${this.salary}<br>`;
    }
}

const EmpArray = [
    new Staff("Priya", 28, "EMP105", "Manager", "Sales", 75000),
    new Staff("Amit", 32, "EMP110", "Developer", "IT", 85000),
    new Staff(
        "Sneha",
        26,
        "EMP115",
        "Designer",
        "Marketing",
        65000
    ),
    new Staff("Rohan", 30, "EMP120", "Analyst", "Finance", 70000),
    new Staff("Anita", 29, "EMP125", "HR Executive", "HR", 60000),
];

function searchEmployee() {
    const input = document
        .getElementById("employeeName")
        .value.trim()
        .toLowerCase();
    const resultDiv = document.getElementById("searchResults");

    if (input === "") {
        resultDiv.innerHTML =
            "<p class='text-danger'>Please Enter A Valid Name or ID</p>";
        return;
    }

    const found = EmpArray.find(
        (emp) =>
            emp.name.toLowerCase() === input ||
            emp.empid.toLowerCase() === input
    );

    if (found) {
        resultDiv.innerHTML = `
          <div class="text-success fw-bold">Employee Found ✅</div>
          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title text-primary">${found.name}</h5>
              <p class="card-text">${found.getDetails()}</p>
            </div>
          </div>`;
    } else {
        resultDiv.innerHTML =
            "<p class='text-danger'>Employee Not Found ❌</p>";
    }
}

document
    .getElementById("employeeName")
    .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchEmployee();
        }
    });
