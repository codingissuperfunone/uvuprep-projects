const students = {
  "Hailey G": ["https://CYOA-p5.haileygrimes.repl.co"],
  "David B": [
    "https://replit.com/@buckldav/DinoGameP5Starter",
    "https://replit.com/@buckldav/PizzaStarter",
  ],
  "Jared B": [
    "https://replit.com/@JABJAB1/CS-final-project-Hunt-the-Wumpus#script.js",
    "https://replit.com/@JABJAB1/DandD-fun#index.html", 
    "https://replit.com/@JABJAB1/multi-page-project#index.html",
  ],
};

const studentsSorted = Object.keys(students)
  .sort()
  .reduce((obj, key) => {
    obj[key] = students[key];
    return obj;
  }, {});

export default studentsSorted;
