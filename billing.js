import data from "./data.js";

var total = 0

let categories = data;
console.log(categories);
let listing = document.getElementById("listings");
categories.forEach(c => {
  let cat_heading = document.createElement("h1");
  cat_heading.innerText = c.name;
  console.log(cat_heading);

  listing.append(cat_heading);

  c.products.forEach((p)=> {
    let product_card = document.createElement("button");
    product_card.classList.add("item");
    product_card.id = `${p.name}_card`;
    product_card.disabled = !p.instock;
    if (!p.instock) {
      product_card.className.add("no_stock");
    }
    let product_img = document.createElement("img");
    product_img.src = `images/${p.img}`
    product_img.alt = p.name
    product_card.append(product_img);
    listing.append(product_card);
    product_card.addEventListener("click", function () {
      var billtext = document.getElementById("summary");
      var billtotal = document.getElementById("total");
      var newText = `${p.name} - ${p.cost}`;
      total += p.cost;
      billtotal.value = total;
      billtext.value += '\n' + newText;
    })
  })


})
//For future
// class Product {
//     constructor(productName, productPrice, productTag, productQuantity) {
//       this.productName = productName;
//       this.productPrice = productPrice;
//       this.productTag = productTag;
//       this.productQuantity = productQuantity;
//     }
//   }

// const products = [
//     new Product("Lays American Style Cream & Onion 90g", 50, "lays_50", 0),
//     new Product("Lays Gourmet Thai Sweet Chilli", 30, "lays_gourmet_tc_30", 0),
//     new Product("Lays Maxx Sizlin BBQ", 30, "lays_maxx_bbq_30", 0),
//     // Add more products here...
//   ];

// function increaseProductQuantity(product) {
//     product.productQuantity += 1;
//   }

document.getElementById("delete").addEventListener("click", function() {
  var textarea = document.getElementById("summary");
  var billtotal = document.getElementById("total");
  var content = textarea.value;
  var lines = content.split("\n");
  var lastLine = lines[lines.length-1];
  var numberMatch = lastLine.match(/\d+/);
  var extractedNumber = parseInt(numberMatch[0]);
  total -= extractedNumber;
  billtotal.value = total;
 
  // Remove the last line
  if (lines.length > 0) {
    lines.pop(); // Remove the last element from the array
    textarea.value = lines.join("\n");
  }
});

  document.getElementById("whatsapp").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var content = billtext.value;
    var lines = content.split("\n");
    var text = ''
    for (let i = 1; i < lines.length; i++) {
      text += lines[i] + "%0A"
    }
    var amount  = total * 1.1
    amount = (Math.round(amount * 100) / 100).toFixed(2)
    text += "Total: " + amount
    var link = "https://wa.me/917594985665?text=" + text;
    window.open(link, '_blank');
  });

  document.getElementById("calctotal").addEventListener("click", function() {
    var billtotal = document.getElementById("total");
    var amount  = total * 1.1
    amount = (Math.round(amount * 100) / 100).toFixed(2)
    billtotal.value = amount
  });

// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/images'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Check if the browser supports the "beforeinstallprompt" event
window.addEventListener('beforeinstallprompt', event => {
  // Prevent the default behavior
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show a custom prompt to the user
  showAddToHomeScreenPrompt();
});

// Function to show the "Add to Home Screen" prompt
function showAddToHomeScreenPrompt() {
  const addToHomeScreenButton = document.getElementById('addToHomeScreenButton');
  addToHomeScreenButton.style.display = 'block';
  addToHomeScreenButton.addEventListener('click', () => {
    // Show the browser's installation prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // Clear the deferredPrompt
      deferredPrompt = null;
      // Hide the custom prompt
      addToHomeScreenButton.style.display = 'none';
    });
  });
}
