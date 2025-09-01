const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");



console.log(wrapper)

wrapper.style.transform = "translateX(0vw)"

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});


const closurePrices = {
  '5x5': 0,
  '13x4': 300,
  '13x6': 500,
};

const inchPrices = {
  '8"': 0,
  '12"': 200,
  '14"': 400,
};

  let selectedClosure = '';
  let selectedInch = '';
  let quantity = 1;

  const closureEls = document.querySelectorAll('.closure');
  const inchEls = document.querySelectorAll('.inch');
  const quantityInput = document.getElementById('quantity');
  const priceEl = document.querySelector('.productPrice');
  const totalEl = document.querySelector('.productTotal');

  const updatePrice = () => {
    const closureExtra = closurePrices[selectedClosure] || 0;
    const inchExtra = inchPrices[selectedInch] || 0;
    const basePrice = chosenProduct.price;
  
    const newPrice = basePrice + closureExtra + inchExtra;
    const total = newPrice * quantity;
  
    priceEl.textContent = `R ${newPrice.toLocaleString("en-ZA", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} ZAR`;
  
    totalEl.textContent = `Total R ${total.toLocaleString("en-ZA", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} ZAR`;
  };
  

  closureEls.forEach(el => {
    el.addEventListener('click', () => {
      selectedClosure = el.textContent;
      closureEls.forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
      updatePrice();
      
    });
  });

  inchEls.forEach(el => {
    el.addEventListener('click', () => {
      selectedInch = el.textContent;
      inchEls.forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
      updatePrice();
    });
  });

  document.getElementById('increaseQty').addEventListener('click', () => {
    quantity++;
    quantityInput.value = quantity;
    updatePrice();
  });

  document.getElementById('decreaseQty').addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      updatePrice();
    }
  });

  // Optional: Add a class for selected styles
  const style = document.createElement('style');
  style.textContent = `
    .selected {
      background-color: black;
      color: white;
    }
  `;
  document.head.appendChild(style);


const products = [
    {
      id: 1,
      title: "Super Double Drawn Bob Wigs",
      price: 2000,
      img: "/img/Bob.jpg",
      closures: ["5x5", "13x4", "13x6"],
      inches: ['8"', '12"', '14"'],
    },
    {
      id: 2,
      title: "Luxury Body Wave Wigs",
      price: 3000,
      img: "/img/body wave.jpg",
      closures: ["4x4", "5x5", "13x4"],
      inches: ['20"', '24"', '28"'],
    },
    {
        id: 3,
        title: "Buss Down Straight Wigs",
        price: 4000,
        img: "/img/Straight.jpg",
        closures: ["4x4", "5x5", "13x4"],
        inches: ['26"', '38"', '30"'],
    },
    {
        id: 4,
        title: "Big Body Curly Wigs",
        price: 3000,
        img: "/img/curly.jpg",
        closures: ["4x4", "5x5", "13x4"],
        inches: ['20"', '26"', '30"'],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productDetail");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductClosures = document.querySelectorAll(".closure");
const currentProductInches = document.querySelectorAll(".inch");
const currentProductTotal = document.querySelector(".productTotal");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
      chosenProduct = products[index];
  
      // Update UI
      currentProductImg.src = chosenProduct.img;
      currentProductTitle.textContent = chosenProduct.title;
  
      // Reset selections
      quantity = 1;
      quantityInput.value = quantity;
      selectedClosure = '';
      selectedInch = '';
      closureEls.forEach(e => e.classList.remove('selected'));
      inchEls.forEach(e => e.classList.remove('selected'));
  
      updatePrice(); 
    });
});
  
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})

document.querySelectorAll('.buyButton').forEach(button => {
  button.addEventListener('click', () => {
    setTimeout(() => {
      document.getElementById('productSection').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  });
});


// Handle footer FAQ links
document.querySelectorAll('.fListItem a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('data-target');

      // Hide main content, show FAQ only
      document.getElementById('mainContent').style.display = 'none';
      document.getElementById('faqPage').style.display = 'block';

      // Scroll to the relevant question
      setTimeout(() => {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
  });
});

// Handle "Back to Store" button
function goBackHome() {
  document.getElementById('faqPage').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
}

// Ensure nav menu items bring you back to main content
document.querySelectorAll('.menuItem').forEach(item => {
  item.addEventListener('click', () => {
      // Show store, hide FAQ
      document.getElementById('faqPage').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
  });
});









  
  

