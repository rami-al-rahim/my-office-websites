
window.addEventListener('resize', initListPage);
initListPage()


function initListPage() {
    if (document.querySelector('body').offsetWidth < 768) {
        document.querySelector('body').style.marginLeft = '0px';
        return;
    }
    // Get the reference element
    var reference = document.querySelector('.sidebar');
    var target = document.querySelector('.my-projects');

    // Calculate the total offset: width + padding-left
    var referenceWidth = reference.offsetWidth; // Includes width + padding
    var referencePadding = parseInt(getComputedStyle(reference).paddingLeft);

    // Set the margin-left of the target element
    target.style.marginLeft = `${referenceWidth + referencePadding}px`;


}