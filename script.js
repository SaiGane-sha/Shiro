/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageNumber) {

  const pages = document.querySelectorAll(".screen");

  pages.forEach(function (page) {
    page.classList.remove("active");
  });

  const targetPage =
    document.getElementById("page" + pageNumber);

  if (targetPage) {

    targetPage.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
}


/* =========================================
   PAGE 1 — YES
========================================= */

const startYes =
  document.getElementById("startYes");

if (startYes) {

  startYes.addEventListener("click", function () {

    showPage(2);

  });

}


/* =========================================
   PAGE 1 — NO MOVING BUTTON
========================================= */

const startNo =
  document.getElementById("startNo");


if (startNo) {

  startNo.addEventListener(
    "mouseenter",
    moveNoButton
  );


  startNo.addEventListener(
    "touchstart",
    function (event) {

      event.preventDefault();

      moveNoButton();

    }
  );

}


function moveNoButton() {

  const button = startNo;

  const width = button.offsetWidth;

  const height = button.offsetHeight;

  const padding = 20;

  const maxX =
    window.innerWidth -
    width -
    padding;

  const maxY =
    window.innerHeight -
    height -
    padding;

  const x =
    Math.max(
      padding,
      Math.random() * maxX
    );

  const y =
    Math.max(
      padding,
      Math.random() * maxY
    );

  button.style.position = "fixed";

  button.style.left =
    x + "px";

  button.style.top =
    y + "px";

  button.style.zIndex =
    "9999";

}



/* =========================================
   PAGE 2
========================================= */

const page2Continue =
  document.getElementById(
    "page2Continue"
  );


if (page2Continue) {

  page2Continue.addEventListener(
    "click",
    function () {

      showPage(3);

    }
  );

}



/* =========================================
   PAGE 3 — SALARY YES
========================================= */

const salaryYes =
  document.getElementById(
    "salaryYes"
  );


const salaryNo =
  document.getElementById(
    "salaryNo"
  );


const salaryMessage =
  document.getElementById(
    "salaryMessage"
  );


const salaryContinue =
  document.getElementById(
    "salaryContinue"
  );


if (salaryYes) {

  salaryYes.addEventListener(
    "click",
    function () {

      salaryMessage.classList.remove(
        "hidden"
      );


      salaryMessage.innerHTML = `
        <strong>
          I KNEW IT! 😂💸
        </strong>

        <br><br>

        The evidence has been recovered.

        <br>

        First salary = PARTY! 🎉
      `;


      salaryContinue.classList.remove(
        "hidden"
      );

    }
  );

}



/* =========================================
   PAGE 3 — NO MOVING BUTTON
========================================= */

if (salaryNo) {

  function moveSalaryNoButton() {

    const button = salaryNo;

    const width =
      button.offsetWidth;

    const height =
      button.offsetHeight;

    const padding = 20;


    const maxX =
      window.innerWidth -
      width -
      padding;


    const maxY =
      window.innerHeight -
      height -
      padding;


    const x =
      Math.max(
        padding,
        Math.random() * maxX
      );


    const y =
      Math.max(
        padding,
        Math.random() * maxY
      );


    button.style.position =
      "fixed";


    button.style.left =
      x + "px";


    button.style.top =
      y + "px";


    button.style.zIndex =
      "9999";

  }


  /*
     Desktop:
     Move when mouse reaches the button
  */

  salaryNo.addEventListener(
    "mouseenter",
    moveSalaryNoButton
  );


  /*
     Mobile:
     Move when user tries to touch it
  */

  salaryNo.addEventListener(
    "touchstart",
    function (event) {

      event.preventDefault();

      moveSalaryNoButton();

    }
  );


  /*
     Keep the original NO functionality.
     If somehow the user manages to click it,
     show the original message.
  */

  salaryNo.addEventListener(
    "click",
    function () {

      salaryMessage.classList.remove(
        "hidden"
      );


      salaryMessage.innerHTML = `
        <strong>
          HMMMM... 🤨
        </strong>

        <br><br>

        Convenient memory loss detected. 😂

        <br><br>

        But I remember. 😌
      `;


      salaryContinue.classList.remove(
        "hidden"
      );

    }
  );

}



/* =========================================
   PAGE 3 → PAGE 4
========================================= */

if (salaryContinue) {

  salaryContinue.addEventListener(
    "click",
    function () {

      showPage(4);

    }
  );

}



/* =========================================
   PAGE 4 → PAGE 5
========================================= */

const page4Continue =
  document.getElementById(
    "page4Continue"
  );


if (page4Continue) {

  page4Continue.addEventListener(
    "click",
    function () {

      showPage(5);

    }
  );

}



/* =========================================
   CALENDAR
========================================= */

let currentDate =
  new Date(2026, 8, 1);


let selectedDates = [];


const calendarGrid =
  document.getElementById(
    "calendarGrid"
  );


const monthTitle =
  document.getElementById(
    "monthTitle"
  );



function renderCalendar() {

  if (!calendarGrid) {
    return;
  }


  calendarGrid.innerHTML = "";


  const year =
    currentDate.getFullYear();


  const month =
    currentDate.getMonth();


  const monthName =
    currentDate.toLocaleString(
      "default",
      {
        month: "long"
      }
    );


  monthTitle.textContent =
    monthName + " " + year;


  const firstDay =
    new Date(
      year,
      month,
      1
    ).getDay();


  const daysInMonth =
    new Date(
      year,
      month + 1,
      0
    ).getDate();



  /* Empty cells */

  for (
    let i = 0;
    i < firstDay;
    i++
  ) {

    const empty =
      document.createElement(
        "div"
      );

    empty.className =
      "calendar-day empty";

    calendarGrid.appendChild(
      empty
    );

  }



  /* Days */

  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {

    const button =
      document.createElement(
        "button"
      );


    button.type =
      "button";


    button.className =
      "calendar-day";


    button.textContent =
      day;


    const dateKey =
      year +
      "-" +
      String(month + 1).padStart(
        2,
        "0"
      ) +
      "-" +
      String(day).padStart(
        2,
        "0"
      );


    if (
      selectedDates.includes(
        dateKey
      )
    ) {

      button.classList.add(
        "selected"
      );

    }


    button.addEventListener(
      "click",
      function () {

        const index =
          selectedDates.indexOf(
            dateKey
          );


        if (index !== -1) {

          selectedDates.splice(
            index,
            1
          );

        }

        else {

          if (
            selectedDates.length >= 2
          ) {

            document.getElementById(
              "dateMessage"
            ).textContent =
              "Pick only one or two days. 👀";

            return;

          }


          selectedDates.push(
            dateKey
          );

        }


        renderCalendar();


        const message =
          document.getElementById(
            "dateMessage"
          );


        if (
          selectedDates.length === 0
        ) {

          message.textContent =
            "Pick one or two days when you're free. 👀";

        }

        else {

          message.textContent =
            selectedDates.length +
            " day" +
            (
              selectedDates.length > 1
                ? "s"
                : ""
            ) +
            " selected. 💕";

        }

      }
    );


    calendarGrid.appendChild(
      button
    );

  }

}



/* =========================================
   PREVIOUS MONTH
========================================= */

const previousMonth =
  document.getElementById(
    "previousMonth"
  );


if (previousMonth) {

  previousMonth.addEventListener(
    "click",
    function () {

      currentDate.setMonth(
        currentDate.getMonth() - 1
      );


      renderCalendar();

    }
  );

}



/* =========================================
   NEXT MONTH
========================================= */

const nextMonth =
  document.getElementById(
    "nextMonth"
  );


if (nextMonth) {

  nextMonth.addEventListener(
    "click",
    function () {

      currentDate.setMonth(
        currentDate.getMonth() + 1
      );


      renderCalendar();

    }
  );

}



/* =========================================
   CALENDAR CONTINUE
========================================= */

const dateContinue =
  document.getElementById(
    "dateContinue"
  );


if (dateContinue) {

  dateContinue.addEventListener(
    "click",
    function () {

      if (
        selectedDates.length === 0
      ) {

        document.getElementById(
          "dateMessage"
        ).textContent =
          "Pick at least one day first. 👀💕";

        return;

      }


      updateFinalDates();

      showPage(6);

    }
  );

}



/* =========================================
   FINAL DATES
========================================= */

function updateFinalDates() {

  const finalDates =
    document.getElementById(
      "finalDates"
    );


  if (!finalDates) {
    return;
  }


  const formatted =
    selectedDates.map(
      function (dateKey) {

        const parts =
          dateKey.split("-");


        const date =
          new Date(
            Number(parts[0]),
            Number(parts[1]) - 1,
            Number(parts[2])
          );


        return date.toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
            year: "numeric"
          }
        );

      }
    );


  finalDates.textContent =
    formatted.join(" • ");

}



/* =========================================
   PLAN SELECTION
========================================= */

let selectedPlans = [];


const planOptions =
  document.querySelectorAll(
    ".plan-option"
  );


planOptions.forEach(
  function (option) {

    option.addEventListener(
      "click",
      function () {

        const plan =
          this.dataset.plan;


        const index =
          selectedPlans.indexOf(
            plan
          );


        if (index === -1) {

          selectedPlans.push(
            plan
          );


          this.classList.add(
            "selected"
          );

        }

        else {

          selectedPlans.splice(
            index,
            1
          );


          this.classList.remove(
            "selected"
          );

        }


        const message =
          document.getElementById(
            "planMessage"
          );


        if (
          selectedPlans.length === 0
        ) {

          message.textContent =
            "Pick at least one. 💕";

        }

        else {

          message.textContent =
            selectedPlans.length +
            " plan" +
            (
              selectedPlans.length > 1
                ? "s"
                : ""
            ) +
            " selected. 😌";

        }

      }
    );

  }
);



/* =========================================
   PLAN CONTINUE
========================================= */

const planContinue =
  document.getElementById(
    "planContinue"
  );


if (planContinue) {

  planContinue.addEventListener(
    "click",
    function () {

      if (
        selectedPlans.length === 0
      ) {

        document.getElementById(
          "planMessage"
        ).textContent =
          "Pick at least one plan. 😂💕";

        return;

      }


      document.getElementById(
        "finalPlans"
      ).textContent =
        selectedPlans.join(" • ");


      showPage(7);

    }
  );

}

/* =========================================
   SEND DETAILS — WHATSAPP
========================================= */

const sendDetails =
  document.getElementById("sendDetails");

if (sendDetails) {

  sendDetails.addEventListener(
    "click",
    function () {

      /* Selected dates */

      const dates =
        selectedDates.length > 0
          ? selectedDates.join(" • ")
          : "Not selected";


      /* Selected plans */

      const plans =
        selectedPlans.length > 0
          ? selectedPlans.join(" • ")
          : "Not selected";


      /* WhatsApp message */

      const message = `
🌸 FIRST SALARY CELEBRATION 🌸

✈️ FIRST SALARY EXPRESS

📍 Route
Namma Chennai → ITC Grand Chola

👥 Passengers
🐶 Shiro + 🐗 Inosuke + 🐼 Panda

📅 Date options
${dates}

🎯 Plans
${plans}

🍽️ Destination
ITC Grand Chola 😊

💸 Sponsor
🐶 Shiro™

💸 Co Sponsor
🐼 Panda
      `.trim();


      /* Your WhatsApp number */

      const phoneNumber =
        "918309944604";


      /* Encode message */

      const encodedMessage =
        encodeURIComponent(message);


      /* WhatsApp URL */

      const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodedMessage;


      /* Open WhatsApp */

      window.open(
        whatsappURL,
        "_blank"
      );


      /* Change button text */

      this.textContent =
        "💌 WhatsApp Ready! 🎉";

    }
  );

}



/* =========================================
   INITIALIZE
========================================= */

renderCalendar();