document.addEventListener('DOMContentLoaded', function () {
    AFRAME.registerComponent('markerhandler', {
        init: function () {
            let marker = this.el;
            let model = document.querySelector('#car-model');

            if (!model) {
                console.error("Model not found! Check your glTF path and entity ID.");
                return;
            }

            //make sure the model shows when the marker is found and when it is lost 
            //not working on found and lost event and car follows the camera
            //and does not stay at the position we set from the camera**
            marker.addEventListener('markerFound', () => {
                console.log("Marker found! Showing model.");
                model.setAttribute('visible', true);
            });

            marker.addEventListener('markerLost', () => {
                console.log("Marker lost! Keeping model visible.");
                model.setAttribute('visible', true); 
            });
        }
    });

    AFRAME.registerComponent('clicker', {
        init: function () {
            this.soundEl = document.querySelector('#click-sound');
            this.el.addEventListener('click', () => {
                if (this.soundEl) {
                    this.soundEl.components.sound.playSound();
                } else {
                    console.error("Sound entity not found.");
                }
            });
        }
    });

    
});