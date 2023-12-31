<template>
  <div class="m-0 text-align-center">
    <div
      class="d-flex justify-content-between align-items-center p-3 rounded-4 rounded-bottom-0"
      style="background-color: transparent; color: white"
    >
      <button
        class="btn border-transparent fw-bold text-dark"
        @click="previousMonth"
      >
        &lt;
      </button>
      <h4 class="fw-bold">{{ formattedDate }}</h4>
      <button
        class="btn border-transparent fw-bold text-dark"
        @click="nextMonth"
      >
        &gt;
      </button>
    </div>
    <div class="d-flex" style="background-color: transparent">
      <div v-for="day in days" class="calendar-day text-light" :key="day">
        {{ day }}
      </div>
    </div>
    <div class="calendar-grid">
      <div
        v-for="date in calendarDates"
        :key="date"
        class="calendar-cell text-light"
        @click="selectDate(date)"
        :class="{ 'selected-date': isDateSelected(date) }"
      >
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: new Date(),
      currentMonth: new Date(),
      selectedDateOnCalendar: new Date(),
    };
  },
  computed: {
    days() {
      return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    },
    calendarDates() {
      const firstDay = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth(),
        1
      );
      const lastDay = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth() + 1,
        0
      );
      const daysInMonth = lastDay.getDate();
      const firstDayOfWeek = firstDay.getDay();

      const dates = [];
      for (let i = 1; i <= daysInMonth; i++) {
        dates.push(i);
      }

      const leadingBlanks = new Array(firstDayOfWeek).fill(null);
      const trailingBlanks = new Array(
        6 - ((dates.length + firstDayOfWeek - 1) % 7)
      ).fill(null);

      return [...leadingBlanks, ...dates, ...trailingBlanks];
    },
    formattedDate() {
      let date = this.selectedDateOnCalendar.getDate();
      let month = this.selectedDateOnCalendar.getMonth() + 1;
      let year = this.selectedDateOnCalendar.getFullYear();

      // console.log(tempDate)
      let monthObj = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
      };
      return date + " " + monthObj[month] + " " + year;
    },
  },
  methods: {
    previousMonth() {
      this.currentMonth = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth() - 1,
        1
      );
      this.selectedDateOnCalendar = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth(),
        1
      );
    },
    nextMonth() {
      this.currentMonth = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth() + 1,
        1
      );
      this.selectedDateOnCalendar = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth(),
        1
      );
    },
    selectDate(date) {
      // When a calendar cell is clicked, update the selected date.
      this.selectedDateOnCalendar = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth(),
        date
      );
      // console.log(this.selectedDateOnCalendar)
      this.$emit("getCalendarDate", this.selectedDateOnCalendar);
    },
    isDateSelected(date) {
      // Check if the date matches the selected date.
      if (this.selectedDateOnCalendar === null) {
        return false;
      }
      return (
        date === this.selectedDateOnCalendar.getDate() &&
        this.currentMonth.getMonth() ===
          this.selectedDateOnCalendar.getMonth() &&
        this.currentMonth.getFullYear() ===
          this.selectedDateOnCalendar.getFullYear()
      );
    },
  },
};
</script>

<style scoped>
.btn {
  background-color:#e0c580;
  color: #FFF;
}

.btn:hover {
  background-color:#FFF;
  color: #e0c580;
  border-color: #e0c580;
}

.selected-date {
  background-color: #e7d095;
  border: 2px solid black;
  color: black !important;
}

.calendar-day {
  flex: 1;
  padding: 10px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-cell {
  padding: 10px;
  min-height: 50px;
  text-align: center;
  border-radius: 50px;
}

.calendar-cell:hover {
  cursor: pointer;
  border: 1px solid #e0c580;
  transform: scale(1.05);
  transition: transform 0.3s;
}
</style>
