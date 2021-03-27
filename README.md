# Percentage of the day
Visualization of the day in percentage made in HTML & Javascript

Using this calculation to calculate the current percentage of a day.
```javascript
var secElapsed = (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() + today.getMilliseconds() / 1000) / 86400;
var elapsedPercentage = secElapsed * 100;
```
