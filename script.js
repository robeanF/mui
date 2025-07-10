Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

const videoElement = document.getElementById("myVideo");
        videoElement.addEventListener('suspend', () => {
            // suspend invoked
            // show play button
        });

        videoElement.addEventListener('play', () => {
            // video is played
            // remove play button UI
        });

$('body').on('click touchstart', function () {
            const videoElement = document.getElementById('myVideo');
            if (videoElement.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                videoElement.play();
            }
    });

$('body').on('click touchstart', function ()  {var videoElement = document.getElementsByClassName('inlinevideo');if (videoElement.playing) {} else {$('.inlinevideo').trigger('play');}});

