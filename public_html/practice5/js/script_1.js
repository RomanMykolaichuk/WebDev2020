// Event handling
document.addEventListener("DOMContentLoaded",
        function (event) {

            // Unobtrusive event binding
            document.querySelector(".second_button")
                    .addEventListener("click", function () {
        
                        // Call server to get the name
                        $ajaxUtils
                                .sendGetRequest("https://reqres.in/api/products/3",
                                        function (request) {
                                            console.log(request.responseText);
                                            var obj = JSON.parse(request.responseText);

                                            document.querySelector("#footer")
                                                    .innerHTML = obj.data.name;
                                        });


                    }
                    );
        });