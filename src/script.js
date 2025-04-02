let marker;
let scene;

function car(pos) {
    if (document.querySelector("#car-model")) {
        let car = document.querySelector("#car-model");
        car.parentNode.removeChild(car);
    }
    let car = `<a-entity id="car-model" 
                gltf-model="https://ses011.github.io/MallMixAR.github.io/porsche/scene.gltf"
                scale="1 1 1" 
                rotation="-90 0 0" 
                position=${pos}
                visible="false" 
                clicker>
            </a-entity>`;

    marker.addEventListener('markerFound', (e) => {
        m.insertAdjacentHTML('beforeend', car(pos));

        // console.log("Marker found! Showing model.");
        // model.setAttribute('visible', true);
    });

    marker.addEventListener('markerLost', (e) => {


        // console.log("Marker lost! Keeping model visible.");
        // model.setAttribute('visible', true);
    });
}

window.onload(() => {
    marker = document.querySelector("a-marker-camera");
    scene = document.querySelector("a-scene");

    AFRAME.registerComponent('markerhandler', {
        init: function () {
            let marker = this.el;
            console.log(marker);
            // let model = document.querySelector('#car-model');

            // if (!model) {
            //     console.error("Model not found! Check your glTF path and entity ID.");
            //     return;
            // }

            //make sure the model shows when the marker is found and when it is lost 
            //not working on found and lost event and car follows the camera
            //and does not stay at the position we set from the camera**

            // marker.addEventListener('markerFound', (e) => {
            //     console.log("Marker found! Showing model.");
            //     model.setAttribute('visible', true);
            // });

            // marker.addEventListener('markerLost', (e) => {
            //     console.log("Marker lost! Keeping model visible.");
            //     model.setAttribute('visible', true);
            // });
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
}) 