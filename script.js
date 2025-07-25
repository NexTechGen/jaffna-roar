 // Disable right-click
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });

    // Optional: disable Ctrl+C and right-click copy
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
      }
    });

 // Load navbar
    fetch('nav.html')
      .then(res => res.text())
      .then(data => document.getElementById('navbar').innerHTML = data);
 
 // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.getElementById("footerYear").textContent = new Date().getFullYear();

  
const text_Color = document.querySelectorAll(".text-rose-600");
    text_Color.forEach(text_Color => {
      text_Color.classList.remove("text-rose-600"); 
      text_Color.style.color = "#6c0505"; 
    });

document.querySelectorAll(".border-rose-600").forEach(el => {
      el.classList.remove("border-rose-600"); 
      el.style.borderColor = "#6c0505";
    });

document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.innerHTML = `
      .bg-rose-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(108 5 5 / var(--tw-bg-opacity, 1)) !important;
      }
      .bg-rose-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(108 5 5 / var(--tw-bg-opacity, 1)) !important;
      }
    `;
    document.head.appendChild(style);
  });



  function sendMail(e) {
    e.preventDefault();

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contactNo").value;
    const department = document.getElementById("department").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("New Appointment Request");
    const body = encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\nContact No: ${contact}\nDepartment: ${department}\nMessage: ${message}`
    );

    window.location.href = `mailto:jaffnaroar.tech2016@gmail.com?subject=${subject}&body=${body}`;
  }
