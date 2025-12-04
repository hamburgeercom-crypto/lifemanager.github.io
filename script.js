function calculate() {
  let income = parseFloat(document.getElementById("income").value);
  let goal = parseFloat(document.getElementById("goal").value);
  let weeks = (goal / income).toFixed(1);
  document.getElementById("output").innerText = 
    "At this pace, you'll reach your goal in " + weeks + " weeks.";
}
