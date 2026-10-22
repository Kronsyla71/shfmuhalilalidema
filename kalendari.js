    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("monthYear");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let date = new Date();

    const events = {
    "2026-05-01": "Dita Ndërkombëtare e Puntorit",
      "2026-06-12": "Dita e Paqes",
      "2026-05-09":"Dita e Evropes",
      "2026-05-27":"Kurban Bajrami",
      "2025-11-28":"Dita e Pavarësisë e Shqipërisë",
      "2025-12-25":"Krishlindjet Katolike",
      "2025-12-24":"Përfundimi i gjysëmvjetorit të parë",
      "2025-12-26":"Dita e parë e Pushimit Dimëror",
      "2025-12-27":"Dita e dytë e Pushimit Dimëror",
      "2025-12-28":"Dita e tretë e Pushimit Dimëror",
      "2025-12-29":"Dita e katërt e Pushimit Dimëror",
      "2025-12-30":"Dita e pestë e Pushimit Dimëror",
      "2025-12-31":"Dita e gjashtë e Pushimit Dimëror",
      "2026-01-01":"Dita e shtatë e Pushimit Dimëror",
      "2026-01-02":"Dita e tetë e Pushimit Dimëror",
      "2026-01-03":"Dita e nwntë e Pushimit Dimëror",
      "2026-01-04":"Dita e dhjetë e Pushimit Dimëror",
      "2026-01-05":"Dita e njëmbëdhjetë e Pushimit Dimëror",
      "2026-01-06":"Dita e dymbëdjetë e Pushimit Dimëror",
      "2026-01-07":"Dita e trembëdhjtë e Pushimit Dimëror",
      "2026-02-17":"Pavarsia e Republikes së Kosoves",
      "2026-03-20":"Fitëe Bajrami",
      "2026-04-07":"Dita e parë e pushimit pranveror",
       "2026-04-08":"Dita e dytë e pushimit pranveror", 
       "2026-04-09":"Dita e Kushtetuës" ,
    "2022-11-28":"Pavarsia e Shqipërisë",
    "2022-12-25":"Krishlindje Katolike",
    "2023-17-02":"Dita e Pavarsisë së Kosoves",
    "2023-09-04":"Pashket Katolike",
    "2023-09-04":"Dita e Kushtetues",
    '2023-16-04':"Pashkët Ortodokse",
    "2023-23-04":"Fiter Bajrami",
    "2023-01-05":"Dita ndërkombëtare e punës",
     "2023-09-05":"Dita e Evropës",
      "2026-05-19":"Dita e shkollës sonë", 
       "2026-04-10":"Dita e tretë e pushimit pranveror", 
       "2026-04-11":"Dita e katërt e pushimit pranveror" ,
       "2026-04-12":"Pashkët Katolike",
       "2026-04-13":"Merret Pushimi per te dielen",
       "2026-06-26":"Testi i Arritshmerisë",  
       "2026-06-05":"Perfundimi i viti shkollor per Klaset IX",
       "2025-09-01":"Fillimi i vitit shkollor 2025/2026", 
       "2026-04-14":"Fillon mësimi pas pushimit pranveror",
       "2024-10-30":"Fillimi i pushimit vjeshtor", 
       "2024-10-31":"Dita e dytë e pushimit vjeshtor" ,
       "2025-11-01":"Dita e tretë e pushimit vjeshtor" ,
       "2025-11-04":"Fillimi i mësimit pas pushimit vjeshtor",
       "2025-09-02":"Fillimi i vitit shkollor 2024/2025",
      "2025-12-25":"Krishlindjet Katolike",
      "2025-12-24":"Fillimi i Pushimit Dimëror",
      "2025-12-26":"Dita e parë pushimit dimëror",
      "2025-12-27":"Dita e dytë pushimit dimëror",
      "2025-12-28":"Dita e tretë pushimit dimëror",
      "2025-12-29":"Dita e katërt pushimit dimëror",
      "2025-12-30":"Dita e pestë pushimit dimëror",
  "2025-12-31":"Dita e gjashtë pushimit dimëror",
"2025-01-01":"Viti i ri 2025",
"2025-01-02":"Dita e tetë pushimit dimëror",
 "2025-01-03":"Dita e nëntë pushimit dimëror",
"2025-01-04":"Dita e dhjetë pushimit dimëror",
 "2025-01-05":"Dita e njëmbwdhjetë pushimit dimëror",
"2025-01-06":"Dita e dymbëdhjetë e pushimit dimëror",
"2025-01-07":"Krishlindjet Ortodokse",
"2025-01-08":"Fillimi i mësimit pas pushimit dimëror",  
"2025-02-17":"Pavarsia e Republikes sw Kosovws",
"2025-03-30":"Fiter Bajrami",
"2025-04-07":"Dita e parë e pushimit pranveror",
       "2025-04-08":"Dita e dytë e pushimit pranveror", 
       "2025-04-09":"Dita e Kushtetuës" ,
       "2025-04-10":"Dita e tretë e pushimit pranveror", 
       "2025-04-11":"Dita e katërt e pushimit pranveror" ,
       "2025-04-20":"Pashkët Katolike",
        "2025-04-20":"Pashkët Ortodokse",
       "2025-05-01":"Dita Nderkombetare e Puntorit",
"2025-05-08":"Dita e Evropws",
"2025-06-06":"Kurban Bajrami",
"2025-06-12":"Dita e Paqes",
"2025-06-05":"Perfundimi i vitit shkollor per nxenesit e klaseve te IX",
"2026-06-23":"Perfundimi i vitit shkollor tw klasave I deri nw VIII",
"2026-10-28": "Fillon pushimi vjeshtor",
    "2026-10-30": "Përfundon pushimi vjeshtor",

    "2026-11-28": "Dita e Shqiptarëve, Dita e Pavarësisë së Shqipërisë",

    "2026-12-24": "Përfundimi i gjysmëvjetorit të parë",
    "2026-12-25": "Krishtlindjet Katolike",
    "2026-12-28": "Fillon pushimi dimëror",
    "2027-01-01": "Viti i Ri",
    "2027-01-02": "Viti i Ri",
    "2027-01-07": "Krishtlindjet Ortodokse",
    "2027-01-08": "Përfundon pushimi dimëror",

    "2027-02-17": "Dita e Pavarësisë së Republikës së Kosovës",

    "2027-03-09": "Fitër Bajrami",
    "2027-03-28": "Pashkët Katolike",

    "2027-04-05": "Fillon pushimi pranveror",
    "2027-04-08": "Përfundon pushimi pranveror",
    "2027-04-09": "Dita e Kushtetutës",

    "2027-05-01": "Dita Ndërkombëtare e Punëtorit",
    "2027-05-02": "Pashkët Ortodokse",
    "2027-05-09": "Dita e Evropës",
    "2027-05-16": "Kurban Bajrami",
    "2027-05-19": "Përfundimi i vitit mësimor për klasën e 12",

    "2027-06-09": "Përfundimi i vitit mësimor për klasat 9, 10 dhe 11",
    "2027-06-12": "Dita e Paqes",
    "2027-06-23": "Përfundimi i vitit mësimor për klasat 1–8",

     };

    function 
    
    
    
    renderCalendar() {
      calendar.innerHTML = "";

      const year = date.getFullYear();
      const month = date.getMonth();

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();
      const today = new Date();

      const monthNames = [
        "Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor",
        "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"
      ];

      monthYear.textContent = `${monthNames[month]} ${year}`;

      let startDay = firstDay === 0 ? 6 : firstDay - 1;

      for (let i = 0; i < startDay; i++) {
        const empty = document.createElement("div");
        empty.classList.add("day", "empty");
        calendar.appendChild(empty);
      }

      for (let i = 1; i <= lastDate; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.style.animationDelay = `${i * 0.02}s`;

        const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;

        if (
          i === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear()
        ) {
          day.classList.add("today");
        }

        day.innerHTML = `<span class="day-number">${i}</span>`;

        if (events[fullDate]) {
          const dot = document.createElement("div");
          dot.classList.add("event-dot");

          const tooltip = document.createElement("div");
          tooltip.classList.add("tooltip");
          tooltip.textContent = events[fullDate];

          day.appendChild(dot);
          day.appendChild(tooltip);
        }

        calendar.appendChild(day);
      }
    }

    prevBtn.addEventListener("click", () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });

    renderCalendar();