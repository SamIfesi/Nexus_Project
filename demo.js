document.addEventListener("DOMContentLoaded", function () {
  const dayTabs = document.querySelectorAll(".day-tab");
  const scheduleDays = document.querySelectorAll(".schedule-day");

  // Desktop tab switching
  dayTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const selectedDay = this.getAttribute("data-day");

      // Remove active class from all tabs
      dayTabs.forEach((t) => t.classList.remove("active"));

      // Remove active class from all schedule days
      scheduleDays.forEach((day) => day.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      // Show selected day schedule
      document.getElementById(selectedDay).classList.add("active");
    });
  });
});
