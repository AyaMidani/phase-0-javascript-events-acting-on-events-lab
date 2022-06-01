// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  dodger.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if(e.key==="ArrowRight")
    {
        moveDodgerRight()
    }
  });

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const Right = parseInt(rightNumbers, 10);
  
    if (Right > 0) {
      dodger.style.left = `${Right + 1}px`;
    }
  }