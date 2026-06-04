const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");
const contactButton = contactForm.querySelector('button[type="submit"]');
const formStatus = contactForm.querySelector(".form-status");

// Add the three public values from your EmailJS dashboard.
const EMAILJS_CONFIG = {
  serviceId: "service_9wd3mvn",
  templateId: "template_tysh1wq",
  publicKey: "jtSV3XSWJcwTgajEt"
};

document.querySelector("#year").textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Reveal sections and cards as they enter the viewport.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

// Keep the sticky navigation state aligned with the visible section.
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => sectionObserver.observe(section));

// Send the form directly to Mahesh's inbox through EmailJS.
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const senderEmail = contactForm.elements.reply_to.value.trim();
  const completeEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!completeEmailPattern.test(senderEmail)) {
    formStatus.textContent = "Please enter a complete email address, such as name@example.com.";
    formStatus.className = "form-status error";
    contactForm.elements.reply_to.focus();
    return;
  }

  const isConfigured = Object.values(EMAILJS_CONFIG).every((value) => !value.startsWith("YOUR_"));

  if (!isConfigured) {
    formStatus.textContent = "Email service setup is pending. Please use the email link on the left.";
    formStatus.className = "form-status error";
    return;
  }

  contactButton.disabled = true;
  contactButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending';
  formStatus.textContent = "Sending your message...";
  formStatus.className = "form-status";

  try {
    await emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      contactForm,
      { publicKey: EMAILJS_CONFIG.publicKey }
    );

    contactForm.reset();
    formStatus.textContent = "Message sent successfully. Mahesh will get back to you soon.";
    formStatus.className = "form-status success";
  } catch (error) {
    console.error("EmailJS send failed:", error);
    formStatus.textContent = "Message could not be sent. Please email Mahesh using the link on the left.";
    formStatus.className = "form-status error";
  } finally {
    contactButton.disabled = false;
    contactButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
  }
});
