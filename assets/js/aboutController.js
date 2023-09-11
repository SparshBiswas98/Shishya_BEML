var benefitElements = document.getElementsByClassName('about-benefit');
var blogElements = document.getElementsByClassName('about-blog');
var previous;
var previousBlog;

var coll = document.getElementsByClassName("read-more");

var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("read-more-active");
        if (this.classList.value.includes('read-more-active')) {
            this.innerText = 'Collapse';
        }
        else {
            this.innerText = 'Read more';
        }
        var content = this.previousElementSibling;
        if (content.offsetHeight !== 16) {
            content.style.maxHeight = '16px';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


function clickBenefit(id) {
    if (previous) {

        if (previous.innerText === benefitElements[id].innerText) {
            previous.classList.toggle('benefit-clicked');
            previousBlog.style.display = (previousBlog.style.display === 'none')? 'block' : 'none';
        }
        else {
            previous.classList.remove('benefit-clicked');
            previousBlog.style.display = 'none';

            previous = benefitElements[id];
            previousBlog = blogElements[id];
            benefitElements[id].classList.add('benefit-clicked');
            blogElements[id].style.display = 'block';
        }
    }
    else {
        previous = benefitElements[id];
        previousBlog = blogElements[id];

        benefitElements[id].classList.add('benefit-clicked');
        blogElements[id].style.display = 'block';
    }
}