// var typed= new typed(".text", {
//     Strings: ["Frontend Developer", "YouTuber","Web Developer"],
//     typeSpeed : 100,
//     backSpeed:100,
//     backDelay: 1000,
//     loop:true
//     });
console.log("worked");

var typed = new Typed(".text", {
    strings: ["Devops Engineer", "AWS Solutions Architecture", "Machine Learning Engineer", "Python Developer"], // 'strings' should be lowercase and properly formatted
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})



document.querySelectorAll('.progress').forEach(progress => {
    const width = progress.getAttribute('data-width');
    setTimeout(() => {
        progress.style.width = width;
    }, 500);
});



// document.querySelectorAll('.circle').forEach(circle => {
//     const progress = circle.getAttribute('data-progress');
//     let count = 0;

//     const interval = setInterval(() => {
//         if (count >= progress) {
//             clearInterval(interval);
//         } else {
//             count++;
//             circle.textContent = `${count}%`;
//         }
//     }, 20);
// });


 

    // (function () {
    //     emailjs.init("service_dd6qwjv"); // Replace with your EmailJS user ID
    // })();

    // document.getElementById('contact-form').addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     const formStatus = document.getElementById("form-status");

    //     emailjs.send("service_dd6qwjv", "template_hkfwbzs", {
    //         name: document.getElementById("name").value,
    //         email: document.getElementById("email").value,
    //         email: document.getElementById("subject").value,
    //         message: document.getElementById("message").value,
    //     })
    //     .then(function () {
    //         formStatus.innerHTML = "<p class='text-success'>✅ Message sent successfully!</p>";
    //         document.getElementById("contact-form").reset();
    //     }, function (error) {
    //         formStatus.innerHTML = "<p class='text-danger'>❌ Failed to send message. Try again later.</p>";
    //     });
    // });



    function sendMail(){
        let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
        }
        emailjs.send("service_dd6qwjv", "template_hkfwbzs", parms).then(alert("Your Details has Sent!!"))
        
    }




 
    console.log("worked");