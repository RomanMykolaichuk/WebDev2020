// Event handling
document.addEventListener("DOMContentLoaded",
        function (event) {

        // Unobtrusive event binding
        document.querySelector(".button1")
                .addEventListener("click", function () {

                // Call server to get the name
                $ajaxUtils
                        .sendGetRequest("data/name.txt",
                                function (request) {
                                var name = request.responseText;
                                });
                });
            });