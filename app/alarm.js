// eslint-disable-next-line no-unused-vars
const peopleThatHaveUsedAlarm = [
  { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }
];

function wakeup(currentTime) {
  // currentTime will be a Javascript Date object
  // https://www.w3schools.com/jsref/jsref_obj_date.asp
  const currentHour = currentTime.getHours();

  let text = "0"
  switch (currentHour) {
    case 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11:
      text = "Ugggggh its too early - I'm not waking up yet";
      return text;
      break;
    case 12:
    case 13:
    case 14:
      text = "Yessssss its lunch time!!!";
      return text;
      break;
    default:
      text = "Get up!! You're wasting the day";
      return text;
      break;
  }
}

function snooze() {
  let snoozeAttempts = 0;

  let i = 0;
  while (i < 20) {
    i++;
    snoozeAttempts++;
  }

  return snoozeAttempts;
}


peopleThatHaveUsedAlarm.forEach(function(obj) {
    console.log(obj["name"]);
  }
});

module.exports = {
  wakeup,
  snooze
};