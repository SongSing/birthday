const utterance = new SpeechSynthesisUtterance();
const startingName = "michael";

function $(selector)
{
    return document.querySelector(selector);
}

function startPlaying()
{
    $("#splash").style.display = "none";

    $("#audio1").play();
}

function updateName()
{
    const name = $("#name").value;
    utterance.text = name;
    document.title = "happy birthday " + name + "!";
}

function init()
{
    $("#name").value = startingName;
    updateName();

    Array.from(document.querySelectorAll(".muted")).forEach(a => a.volume = 0);

    $("#audio1").addEventListener("ended", () =>
    {
        window.speechSynthesis.speak(utterance);
        $("#audio2").play();
    });

    $("#audio2").addEventListener("ended", () =>
    {
        $("#audio3").play();
    });

    $("#audio3").addEventListener("ended", () =>
    {
        window.speechSynthesis.speak(utterance);
        $("#audio4").play();
    });

    $("#audio4").addEventListener("ended", () =>
    {
        $("#audio5").play();
    });

    $("#audio5").addEventListener("ended", () =>
    {
        $("#audio1").play();
    });
    
    $("#nameContainer").addEventListener("mouseenter", () =>
    {
        $("#name").style.transition = "transform 0.2s, opacity 0.2s";
        $("#name").style.transform = "";
        $("#name").style.opacity = "";
        $("#nameLabel").style.transition = "transform 0.2s, opacity 0.2s";
        $("#nameLabel").style.transform = "";
        $("#nameLabel").style.opacity = "";
    });

    $("#nameContainer").addEventListener("mouseleave", () =>
    {
        $("#name").style.transitionDuration = "";
        $("#name").style.transform = "translateY(-100%)";
        $("#name").style.opacity = "0";
        $("#nameLabel").style.transitionDuration = "";
        $("#nameLabel").style.transform = "translateY(-100%)";
        $("#nameLabel").style.opacity = "0";
    });

    $("#name").addEventListener("input", updateName);

    $("#splash").addEventListener("click", startPlaying);
}

window.addEventListener("load", init);