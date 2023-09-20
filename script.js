function closeModal(modalId) {
    console.log("Closing modal: " + modalId); 
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}





window.onload = function () {
    // Get all elements with class "box"
    var boxes = document.querySelectorAll(".box");

    // Add a click event listener to each box
    boxes.forEach(function (box) {
        box.addEventListener("click", function () {
            // Get the data-modal attribute value
            var modalId = box.getAttribute("data-modal");

            // Display the corresponding modal
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    // Function to close the modal by modal ID
    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Add a click event listener to close buttons within modals
    var closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
            // Get the modal ID from the parent modal
            var modalId = closeButton.parentNode.parentNode.id;
            closeModal(modalId);
        });
    });

    // Add a click event listener to close modals when clicking outside
    window.onclick = function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    };
};
