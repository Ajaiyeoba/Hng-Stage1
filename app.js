document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        return daysOfWeek[dayIndex];
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        const currentDate = new Date();
        return currentDate.getTime();
    }

    // Update placeholders with current data
    const dayOfWeekPlaceholder = document.getElementById("dayOfWeekPlaceholder");
    const utcTimePlaceholder = document.getElementById("utcTimePlaceholder");

    dayOfWeekPlaceholder.textContent = getCurrentDayOfWeek();
    utcTimePlaceholder.textContent = getCurrentUTCTime() + " ms";
});
