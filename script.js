document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    if(name === "" || email === "" || message === "")
    {
        alert("All fields are required");
        return;
    }

    let submissions =
    JSON.parse(localStorage.getItem("contacts")) || [];

    submissions.push({
        name,
        email,
        message
    });

    localStorage.setItem(
        "contacts",
        JSON.stringify(submissions)
    );

    alert("Form Submitted Successfully");

});