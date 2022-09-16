// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// obtainInstruction("steak", 0).then((step0) => {
//   document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
//   //  ... Your code here
// });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    await obtainInstruction("broccoli", 0).then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await obtainInstruction("broccoli", 1).then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await obtainInstruction("broccoli", 2).then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await obtainInstruction("broccoli", 3).then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await obtainInstruction("broccoli", 4).then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await obtainInstruction("broccoli", 5).then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    await obtainInstruction("broccoli", 6).then((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
      document.querySelector(
        "broccoli"
      ).innerHTML += `<li>Broccoli is ready!</li>`;
    });
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
