function setTruckSound(event) {

    truck.sounds.get("Rückwärtsgang").pause();
    var volume = 0.5;
    if (truck.state.rückwärtsgang && truck.tweens.) {
        truck.sounds.get("Rückwärtsgang").setVolume(volume);
        truck.sounds.get("Rückwärtsgang").play();
        truck.sounds.get("Rückwärtsgang").setLoop(true);
    } else {
        truck.sounds.get("Rückwärtsgang").stop();
    } //else if (!truck.state.rückwärtsgang){
        //truck.sounds.get("Rückwärtsgang").pause();
    //}
}