
const rows = [
    {
        Name: "Himanshu",
        Role: "Developer",
        Company: "MNC",
        Salary: "70000",
    },
    {
        Name: "Ankit",
        Role: "Designer",
        Company: "MNC",
        Salary: "60000",
    },
    {
        Name: "Rohit",
        Role: "Manager",
        Company: "MNC",
        Salary: "50000",
    },
];

let HTML = `<table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Company</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                          ${rows
        .map(
            (r) =>
                `<tr>
                                <td>${r.Name}</td>
                                <td>${r.Role}</td>
                                <td>${r.Company}</td>
                                <td>${r.Salary}</td>
                            </tr>`
        )
        .join("")}
                        </tbody>`;

// now we have to access the div in which we want to add this table
document.getElementById("tableroot").innerHTML = HTML;