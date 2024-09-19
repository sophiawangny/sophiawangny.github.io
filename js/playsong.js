function togglePlayPause() {
    // Get the audio element by its ID
    var song = document.getElementById("song");

    // Toggle play/pause of the audio
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }

    // Update the button's text and icon based on the playback state
    var buttonSpan = $("button span");
    var isPlaying = !song.paused; // Determine if the song is playing

    // Set the new HTML content for the button span
    buttonSpan.html(isPlaying 
        ? "music: on&#160; <i class='fas fa-music'></i>" 
        : "music: off <i class='fas fa-volume-mute'></i>"
    );

    // Get the button element
    var button = $("button");

    // Toggle the button color based on the playback state
    if (isPlaying) {
        button.removeClass('pause-button').addClass('play-button');
    } else {
        button.removeClass('play-button').addClass('pause-button');
    }
}
