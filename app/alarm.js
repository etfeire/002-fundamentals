function wakeup(currentTime) {
    // currentTime will be a Javascript Date object
    // https://www.w3schools.com/jsref/jsref_obj_date.asp
    const currentHour = currentTime.getHours();

    if(currentHour > 12 ) {
        return "Ugggggh its too early - I'm not waking up yet";
    }
    else {
        return "Get up!! You're wasting the day";
    }
}

module.exports = {
    wakeup
};