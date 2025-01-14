window.onload = function() {
    // Ensure the audio element is available when the page loads
    var audio = document.getElementById('audio');
    audio.volume = 0.05;  // Set the volume to 5%

    // Array of Haikus
    const haikus = [
        "An old silent pond...\nA frog jumps into the pond—\nSplash! Silence again.",
        "Over the wintry\nForest, winds howl in rage\nWith no leaves to blow.",
        "A world of dew,\nAnd within the flower\nA butterfly rests.",
        "The light of a candle\nIs transferred to another candle—\nSpring twilight.",
        "In the cicada's cry\nNo sign can foretell\nHow soon it must die."
    ];

    // Function to generate a random Haiku
    function generateHaiku() {
        const randomIndex = Math.floor(Math.random() * haikus.length);
        document.getElementById("haiku").textContent = haikus[randomIndex];
    }

    // Add event listener to the button after the page has fully loaded
    document.getElementById("generate-button").addEventListener("click", generateHaiku);
};