
function showDay() {
    let day = parseInt(document.getElementById("dayInput").value);
    let output = document.getElementById("output");

    switch (day) {
        case 1:
            output.innerHTML = "<h2>Today is Sunday</h2><img src='img/sunday.png'><p>Sunday is the pause button of life.</p>";
            break;
        case 2:
            output.innerHTML = "<h2>Today is Monday</h2><img src='img/monday.png'><p>Mondays are for fresh starts.</p>";
            break;
        case 3:
            output.innerHTML = "<h2>Today is Tuesday</h2><img src='img/tuesday.png'><p>Tuesday is a good day to try again.</p>";
            break;
        case 4:
            output.innerHTML = "<h2>Today is Wednesday</h2><img src='img/wednesday.png'><p>Keep going, you're halfway there!</p>";
            break;
        case 5:
            output.innerHTML = "<h2>Today is Thursday</h2><img src='img/Thursday.png'><p>Thursday is a day of optimism.</p>";
            break;
        case 6:
            output.innerHTML = "<h2>Today is Friday</h2><img src='img/Friday.png'><p>Friday is the golden child of the week.</p>";
            break;
        case 7:
            output.innerHTML = "<h2>Today is Saturday</h2><img src='img/Saturday.png'><p>Relax, it’s Saturday!</p>";
            break;
        default:
            output.innerHTML = "<h2 style='color:red;'>Please enter number between 1 and 7</h2>";
    }
}