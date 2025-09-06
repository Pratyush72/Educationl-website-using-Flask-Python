// -----------------reach live----------------

function incrementCount(key, elementId, initialValue) {
    let count = localStorage.getItem(key);
    if (!count) {
        count = initialValue;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem(key, count);
    document.getElementById(elementId).innerText = count + "+";
}
document.addEventListener("DOMContentLoaded", function() {
    incrementCount('reachCount', 'reachCount', 15);
});


setTimeout(function() {
    const flashMessages = document.querySelector('.flashes');
    if (flashMessages) {
        flashMessages.style.display = 'none';
    }
}, 2000); // 2000 milliseconds = 2 seconds
module.exports = {
    extends: ["google"],
    // other ESLint settings...
  };
  

  function toggleMenu() {
    document.querySelector('.nav').classList.toggle('show');
}

// Hide loader after the page has fully loaded
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
    }
});


    function readPDF(pdfFile) {
        window.open(pdfFile, '_blank');
    }

    function downloadPDF(pdfFile) {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = pdfFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
