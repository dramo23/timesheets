// console.log("refactored");

// TODO [ ] 1. Get all table rows from the DOM
const tableBodyTrs = document
  .querySelector(".tableBody")
  .querySelectorAll(".tr");

// TODO [ ] 2. Create a function that creates a html form element
function createForm(week) {
  let form = document.createElement("form");
  form.innerHTML = `
    <th>  <input type="text" class="gray"  value="` + week + `"  /></th>
    <td>
      <input type="number" id="Sunday" min="0" max="20" step=".5" value="0" class="blue"/>
    </td>
    <td>
      <input type="number" id="Monday" min="0" max="20" step=".5" value="0" class="blue"/>
    </td>
    <td>
      <input type="number" id="Tuesday" min="0" max="20" step=".5" value="0" class="blue"/>
    </td>
    <td>
      <input type="number" id="Wednesday" min="0" max="20" step=".5" value="0" class="blue"/>
    </td>
    <td>
      <input type="number" id="Thursday" min="0" max="20" step=".5" value="0" class="blue"/>
    </td>
    <td>
      <input type="number" id="Friday" min="0" max="20" step=".5" value="0" class="blue"/>
    </td>
    <td>
      <input type="number" id="Saturday" min="0" max="20" step=".5" value="0" class="blue"/>
    </td>
    <td>
      <input  type="number" class="weekHours" value="0" disabled />
    </td>
    `;
  form.addEventListener('change', (e) => {
    e.preventDefault
    Sun = Number(e.currentTarget.children[1].value);
    Mon = Number(e.currentTarget.children[2].value);
    Tue = Number(e.currentTarget.children[3].value);
    Wed = Number(e.currentTarget.children[4].value);
    Thu = Number(e.currentTarget.children[5].value);
    Fri = Number(e.currentTarget.children[6].value);
    Sat = Number(e.currentTarget.children[7].value);
    let worked = e.currentTarget.children[8];
    weektotal = Sun + Mon + Tue + Wed + Thu + Fri + Sat;
    worked.value = Sun + Mon + Tue + Wed + Thu + Fri + Sat;
    calculateTotalWorkedHours();

  });
  return form;
}
// TODO [ ] 3. Add all form elements to the DOM using async and IIFE (Immediately Invoked Function Expression)
(async () => {
  tableBodyTrs.forEach((tr) => {
    const weeknum = tr.getAttribute('data-week');
    var week = new Date('March 1, 2024');
    week.setDate(week.getDate() + (7*(weeknum-1)));
    tr.appendChild(createForm(week.toLocaleDateString('en-us', { day:"numeric", month:"short"})));
  });
})();

// TODO: [ ] 4. Get all forms elements from the DOM
const forms = document.querySelectorAll("form");

function calculateTotalWorkedHours() {
    const allWorkedHours = document.querySelectorAll(".weekHours");
  
    // todo: [ ] 6.1.2 Convert NodeList to array
  
    let arrayOfWorkedHours = Array.from(allWorkedHours);
  
    let newWorkHours = arrayOfWorkedHours.map((workedHour) => {
      return workedHour.value;
    });
    
    let totalHours = 0;
    newWorkHours.forEach((weektotal) => {
        totalHours = Number(totalHours) + Number(weektotal);
    })
    
      // todo: [ ] 6.1.6 Output for Total Worked Hours
      let outputWorkedHours = document.getElementById("totalWorkedHours");
      outputWorkedHours.value = totalHours;

}


const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  alert('You Submitted!');
});



