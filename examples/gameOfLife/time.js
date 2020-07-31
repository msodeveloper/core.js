export { start, stop };
import { TICK, WANTS_TRAVEL_TIME, TRAVEL_TIME } from "./eventNames.js";
import { pixelSize } from "./settings/graphics.js";
// import { x, y } from "./dependencies.js";
// import { configuration } from "./configuration.js";


const start = function (emitter, firstTick) {
    const instance = {
        firstTick,

        timePassed: 0
    };
    let paused = false;
    const slider = document.getElementById(`slider`);
    const timer = document.getElementById(`time`);
    emitter.on(TICK, () => {
        const now = Date.now();
        instance.timePassed = now - instance.firstTick;
        timer.textContent = Math.floor(instance.timePassed / 1000); // display in s
    });

    emitter.on(WANTS_TRAVEL_TIME, float => {
        const destination = Date.now() - (instance.timePassed * float);
        const t = new Date()
        t.setTime(destination);
        console.log('destination', t.toLocaleTimeString())
        emitter.emit(TRAVEL_TIME, destination);
    })
    return instance;
};



const stop = function (instance) {
    const { 
        // onpointerdown,
    } = instance;
    // canvas.removeEventListener(`pointerdown`, onpointerdown);
};
