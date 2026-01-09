
// first of all we have to acces the parent container

let parentContainer = document.getElementById("parent-container");

let data = [
    {
        image: "img/web.png",
        title: "Web Developer",
        description:
            "Full stack / MERN stack developer with good knowledge MERN",
    },

    {
        image: "img/cloud.png",
        title: "Cloud Engineer",
        description:
            "I am a Cloud Engineer have Good knowledge of AWS",
    },

    {
        image: "img/backend.png",
        title: "Backend Engineer",
        description:
            "I am a Backend Engineer have Good knowledge of Node js , Php , Mysql",
    },

    {
        image: "img/python.png",
        title: "Python Developer",
        description:
            "I am a Python Developer, Good knowledge of File handling, etc.",
    },
];

// now we have to loop through the data array
data.forEach((item) => {
    const childContainer = document.createElement("div");
    childContainer.classList.add("child-container");

    childContainer.innerHTML = `
            <img src = "${item.image}" alt = "img">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <button>Read More</button>
            `;

    parentContainer.appendChild(childContainer);
});