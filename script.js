// Works object holding task titles, URLs, and button color classes
const works = {
    "task1": {
        "title": "Task 1",
        "url": "works/task1/index.html",
        "colorClass": "btn-orange"
    },
    "task2": {
        "title": "Task 2",
        "url": "works/task2/index.html",
        "colorClass": "btn-green"
    },
    "task3": {
        "title": "Task 3",
        "url": "works/task3/index.html",
        "colorClass": "btn-blue"
    }
};

// Run the code after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const navPanel = document.getElementById('navPanel');
    const displayFrame = document.getElementById('displayFrame');

    // Function to create navigation buttons dynamically
    function createNavButtons() {
        for (const taskKey in works) {
            if (works.hasOwnProperty(taskKey)) {
                const work = works[taskKey];

                // Create the button element
                const button = document.createElement('button');
                button.innerText = work.title;
                button.className = work.colorClass;

                // Add event listener to load the respective task page in the iframe
                button.addEventListener('click', () => {
                    updateIframe(work.url);
                });

                // Append button to navPanel
                navPanel.appendChild(button);
            }
        }
    }

    // Function to update the iframe src attribute
    function updateIframe(url) {
        displayFrame.src = url;
    }

    // Initialize by creating buttons
    createNavButtons();
});
