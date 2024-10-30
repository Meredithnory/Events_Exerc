// The script.js is included in the head of the index.html. To run your code after the DOM is loaded, wrap it with a callback function of an event listener (DOMContentLoaded).
document.addEventListener("DOMContentLoaded", function () {
    // 2. Get the elements from the DOM that you will work on (box container, new box button, color form, color input).
    const boxContainer = document.querySelector('#box-container');
    const newBoxButton = document.querySelector('#new-box-button');
    const colorForm = document.querySelector('#color-form');
    const colorInput = document.querySelector('#color-input');
    // 3. Create variables to store the box color and counter for the box ID.
    let boxColor = null;
    let boxCounter = 0;
    colorForm.addEventListener('submit', function (event) {
        event.preventDefault();
        boxColor = colorInput.value;
        const boxes = document.querySelectorAll('.box');
        for (let box of boxes) {
            box.style.background = `${boxColor}`;

        }
        colorInput.value = '';
    });
    function createNewBox() {
        const createBox = document.createElement('div');
        createBox.classList.add('box');
        createBox.style.background = boxColor;
        createBox.innerText = boxCounter;
        createBox.setAttribute('data-box-id', boxCounter);
        boxCounter += 1;
        boxContainer.appendChild(createBox);
    }

    newBoxButton.addEventListener('click', createNewBox);

    document.addEventListener('dblclick', function (event) {
        if (event.target.classList.contains('box')) {
            event.target.remove();
        }
    });
    document.addEventListener('mouseover', function (event) {
        if (event.target.classList.contains('box')) {
            const x = event.clientX;
            const y = event.clientY;
            event.target.innerText = `X: ${x}, Y: ${y}`;
        }
    });
    document.addEventListener('mouseout', function (event) {
        const element = event.target;
        if (element.classList.contains('box')) {
            const boxId = element.getAttribute('data-box-id');
            element.innerText = boxId;
        }
    });
    document.addEventListener('keydown', function (event) {
        const element = event.target;
        const elementId = element.id;
        if ((event.key === 'N' || event.key === 'n') && elementId !== 'color-input') {
            createNewBox();
        }
    });
});
