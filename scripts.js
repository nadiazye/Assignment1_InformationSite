console.log("The JS script is loaded"); //was having issue with JS script loading, this is to double check

/* ---------- EVENT LISTENER #1: Light/Dark mode button (click) ---------- */
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    // CSS ALTERATION #1 (Add CSS Class): adds or removes .light-mode on <body>
    document.body.classList.toggle("light-mode");

    // CSS ALTERATION: changes the button's text to match the mode
    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "Switch to Dark Mode";
    } else {
        themeBtn.innerHTML = "Switch to Light Mode";
    }
});


/* ---------- EVENT LISTENER #2: Fun Fact button (click) ---------- */
const factBtn = document.getElementById("fact-btn");
const factBox = document.getElementById("fact-box");

const facts = [
    "Stan Lee purposely put a hyphen in Spider-Man so people would not confuse him with Superman.",
    "Stan Lee and Steve Ditko created Spider-Man.",
    "Peter Parker was one of the first teenage heroes to star in his own series instead of being a sidekick.",
    "Michael Jackson was such a massive fan of the web-slinger that he tried to buy Marvel Comics in the 1990s just so he could star as Spider-Man in a movie.",
    "Peter is a level 27 Rouge in World of Warcraft.",
    "Venom made his first full appearance in The Amazing Spider-Man #300 in 1988.",
    "Miles Morales debuted in the comics in 2011.",
    "Miguel O'Hara, Spider-Man 2099, first appeared in 1992.",
    "Before choosing Spider-Man, creators considered names like Fly Man, Mosquito Man, Insect Man, and Stick-to-Wall Man.",
    "Spider-Man: Into the Spider-Verse won the Academy Award for Best Animated Feature.",
    "Spider-man’s webs dissolves after 1 hour and is strong enough to restrain the Hulk.",
    "Peter Parker has an IQ of 250."

];

factBtn.addEventListener("click", function () {

    // picks a random number from 0 up to the last position in the facts list
    const randomIndex = Math.floor(Math.random() * facts.length);

    // puts a random fact inside the empty box
    factBox.innerHTML = "<strong>Fun Fact:</strong> " + facts[randomIndex];

    // CSS ALTERATION: box starts as hidden this then shows it
    factBox.style.display = "block";

    factBox.classList.add("fact-box");

    // change button text
    factBtn.innerHTML = "Show Another Fact";
});


/* ---------- EVENT LISTENER #3: Scrolling the page (scroll) ---------- */
const header = document.querySelector("header");
const subtitle = document.querySelector("header h3");

window.addEventListener("scroll", function () {

    // checks whether the header is currently in its shrunken state
    const isCollapsed = header.classList.contains("scrolled");

    // collapse only when scrolled FAR down (200px) and not already collapsed
    if (window.scrollY > 200 && !isCollapsed) {

        // CSS ALTERATION: shrinks the header and title
        header.classList.add("scrolled");

        header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";

        // CSS ALTERATION: hides the subtitle under the title
        subtitle.style.display = "none";

    // expand only when back NEAR the top (under 50px) and currently collapsed
    } else if (window.scrollY < 50 && isCollapsed) {
        header.classList.remove("scrolled");
        header.style.boxShadow = "none";
        subtitle.style.display = "block";
    }
});