const memoryCards = document.querySelectorAll(".memory-card");
const nextBtn = document.getElementById("nextBtn");
const letterSection = document.getElementById("letterSection");

let openedCount = 0;

document.addEventListener("DOMContentLoaded", () => {

  const animatedItems = document.querySelectorAll(".animate-item");

  animatedItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, 1000 + (index * 500)); 
  });

});

// clicked cards
memoryCards.forEach(card => {
  card.addEventListener("click", () => {

    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
      openedCount++;
    }

    if (openedCount === 5) {
      nextBtn.classList.remove("hidden");
    }
  });
});

nextBtn.addEventListener("click", () => {
  letterSection.classList.remove("hidden");
  letterSection.scrollIntoView({ behavior: "smooth" });
});

/* Flip letter card */
const letterCard = document.querySelector(".letter-card");

letterCard.addEventListener("click", () => {
  letterCard.classList.toggle("flipped");
});

/* Flip gift card */
const giftCard = document.querySelector(".gift-card");

giftCard.addEventListener("click", () => {
  giftCard.classList.toggle("flipped");
});
