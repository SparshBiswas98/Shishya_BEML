var previousSection = null;
var sectionElements = document.getElementsByClassName('course-section');
var mailCounter = 0;

function hideShow(id) {
    if (previousSection) {
        previousSection.style.display = 'none';
    }

    previousSection = sectionElements[id];

    previousSection.style.display = 'block';
}

function sendEmail() {

}