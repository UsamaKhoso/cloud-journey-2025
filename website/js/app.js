const products = [
  {
    id: 1,
    name: "LuxeGlow Sunset Lamp",
    category: "home",
    price: "$24.90",
    margin: "68%",
    shipping: "2-4 days",
    description:
      "Viral TikTok mood lighting with adjustable gradients and companion mobile app for scheduling.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "FlexCore Pilates Bar Kit",
    category: "fitness",
    price: "$39.00",
    margin: "62%",
    shipping: "3-5 days",
    description:
      "All-in-one resistance bar system with detachable bands and follow-along workout library.",
    image:
      "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "AeroBrew Portable Coffee Press",
    category: "tech",
    price: "$44.50",
    margin: "58%",
    shipping: "4-6 days",
    description:
      "USB-C heated brewer delivering barista-grade espresso on the go with reusable pods.",
    image:
      "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "PureWave Smart Diffuser",
    category: "home",
    price: "$28.40",
    margin: "65%",
    shipping: "2-5 days",
    description:
      "WiFi-enabled essential oil diffuser with auto-refill cartridges and ambient mist lighting.",
    image:
      "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "GlowMate LED Therapy Mask",
    category: "beauty",
    price: "$59.00",
    margin: "54%",
    shipping: "5-7 days",
    description:
      "Seven-mode red light therapy mask with rechargeable battery and mobile treatment tracking.",
    image:
      "https://images.unsplash.com/photo-1612810806695-30ba0b49f811?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "HydraPulse Smart Bottle",
    category: "fitness",
    price: "$32.50",
    margin: "60%",
    shipping: "3-5 days",
    description:
      "Self-cleaning UV-C water bottle with hydration reminders and gamified streak tracking.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Nimbus Plush Slippers",
    category: "home",
    price: "$19.90",
    margin: "70%",
    shipping: "2-4 days",
    description:
      "Memory foam slippers with cooling gel inserts and viral-ready unboxing experience.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "SilkRitual Heatless Curler",
    category: "beauty",
    price: "$24.00",
    margin: "66%",
    shipping: "3-5 days",
    description:
      "Overnight curling kit with premium mulberry silk wrap and influencer-ready packaging.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
];

const faqs = [
  {
    question: "Which ecommerce platforms do you support?",
    answer:
      "SwiftShip integrates with Shopify, WooCommerce, BigCommerce, and custom storefronts via our open API.",
  },
  {
    question: "How do you vet suppliers?",
    answer:
      "We partner with audited factories and 3PLs. Each supplier maintains 95%+ on-time fulfillment and passes quarterly QA checks.",
  },
  {
    question: "Can I use my own branding?",
    answer:
      "Yes. All plans include branded packing slips. Scale and Empire plans unlock fully white-labeled packaging and inserts.",
  },
  {
    question: "Do you handle returns and refunds?",
    answer:
      "Our concierge team manages returns, inspections, and replacements. Automated workflows sync status updates with your CRM.",
  },
  {
    question: "Is marketing support included?",
    answer:
      "We provide ad creative templates, influencer outreach lists, and automated email flows. Empire adds a dedicated media buyer.",
  },
];

function renderProducts(filter = "all") {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered =
    filter === "all" ? products : products.filter((product) => product.category === filter);

  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("role", "listitem");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="card-body">
        <h3>${product.name}</h3>
        <div class="product-meta">
          <span>${product.price}</span>
          <span>Margin ${product.margin}</span>
        </div>
        <p>${product.description}</p>
        <div class="product-meta">
          <span>${product.shipping}</span>
          <a class="btn secondary" href="#contact">Import now</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderFaq() {
  const list = document.querySelector(".faq-list");
  if (!list) return;
  list.innerHTML = "";

  faqs.forEach((faq) => {
    const details = document.createElement("details");
    details.className = "faq-item";
    const summary = document.createElement("summary");
    summary.className = "faq-question";
    summary.textContent = faq.question;
    const answer = document.createElement("p");
    answer.className = "faq-answer";
    answer.textContent = faq.answer;

    details.append(summary);
    details.append(answer);
    list.appendChild(details);
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const { filter } = button.dataset;
      renderProducts(filter);
    });
  });
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function updateYear() {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

function init() {
  renderProducts();
  renderFaq();
  setupFilters();
  setupNavToggle();
  updateYear();
}

document.addEventListener("DOMContentLoaded", init);
