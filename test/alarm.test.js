const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});

test('Wasting the day', () => {
  let timeNow = new Date();
  timeNow.setHours(15);
  expect(alarm.wakeup(timeNow)).toBe("Get up!! You're wasting the day");
});

test('Lunchtime', () => {
  let timeNow = new Date();
  timeNow.setHours(12) || timeNow.setHours(13) || timeNow.setHours(14);
  expect(alarm.wakeup(timeNow)).toBe("Yessssss its lunch time!!!");
});

test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(20);
});

test('Call names', () => {
  expect(people("name")).toBe("James");
});