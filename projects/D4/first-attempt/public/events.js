const loader = () => {
    document.querySelector(".loader").innerHTML = "Loading...";
};
const stopLoader = () => {
    document.querySelector(".loader").innerHTML = "";
};

const fetchImage = () => {
    loader();
    fetch("http://localhost:3000/kitten/image")
        // <img class="cat-pic" src="" />
        //Response represents a HTTP response from the server. Typically a Response is not constructed manually, but is available as argument to the resolved promise callback
        .then((response) => {
            stopLoader();
            if (!response.ok) {
                throw response;
            }
            return response.json();
        })
        .then((data) => {
            document.querySelector(".cat-pic").src = data.src;
        })
        .catch((errorHandler) => {
            console.error("error");
        });
};
window.addEventListener("DOMContentLoaded", fetchImage);
document.querySelector("#new-pic").addEventListener("click", fetchImage);
