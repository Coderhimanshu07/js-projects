const projects = [
    {
        title: "Stopwatch",
        image: "../img/stopwatch.png",
        description: "JavaScript based Todo app jisme add, delete aur complete features hain."
    },

    {
        title: "To Do List",
        image: "../img/to-do-list.png",
        description: "Pure JavaScript calculator jo basic arithmetic operations perform karta hai."
    },

    {
        title: "Employee Search System",
        image: "../img/emp-search-system.png",
        description: "Pure JavaScript calculator jo basic arithmetic operations perform karta hai."
    },
    {
        title: "Popup Modal",
        image: "../img/popup.png",
        description: "Pure JavaScript calculator jo basic arithmetic operations perform karta hai."
    },

    {
        title: "Dynamic Table",
        image: "../img/dynamic-table.png",
        description: "Pure JavaScript calculator jo basic arithmetic operations perform karta hai."
    },
    {
        title: "Dynamic deck",
        image: "../img/dynamic-deck.png",
        description: "Pure JavaScript calculator jo basic arithmetic operations perform karta hai."
    },
    {
        title: "Weekly info",
        image: "../img/week.png",
        description: "API based weather app jo real-time weather data show karta hai."
    }
];

const container = document.getElementById("projectContainer");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = `
        bg-white rounded-xl shadow-md overflow-hidden
    transform transition duration-300 hover:scale-105
    fade-in cursor-pointer
    `;

    card.innerHTML = `
        <div class="overflow-hidden">
            <img src="${project.image}"
                 class="w-full h-48 object-contain transition duration-300 hover:scale-110"
                 alt="${project.title}">
        </div>
        <div class="p-5">
            <h2 class="text-xl font-semibold mb-2">${project.title}</h2>
            <p class="text-gray-600 text-sm">
                ${project.description}
            </p>
        </div>

        <button
    class="m-5 bg-slate-800 hover:bg-slate-700 text-white
           py-2 px-4 rounded-lg transition duration-300
           cursor-pointer hover:shadow-lg"
    onclick="window.location.href='projects/${project.title.toLowerCase().replace(/ /g, '-')}/index.html'">
    View Project
</button>    `;

    container.appendChild(card);
});
