var total = 0

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


  
document.getElementById("lays_50").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Lays American Style Cream n Onion - 50";
    total += 50;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

document.getElementById("lays_maxx_sizlin_hot").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Lays sizlin hot - 10";
    total += 10;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  document.getElementById("kurekure_masala_munch").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Kurekure masala munch- 10";
    total += 10;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });
  
  document.getElementById("lays_magic_masala10").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Lays Magic Masala- 10";
    total += 10;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });
  document.getElementById("kurekure_puffcorn").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "kurekure_puffcorn - 10";
    total += 10;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });
  document.getElementById("hide_n_seek").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "hide_n_seek - 30";
    total += 30;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });
  document.getElementById("oreo").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Oreo - 10";
    total += 10;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });
  document.getElementById("pepsi").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "pepsi - 20";
    total += 20;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });
  document.getElementById("7up").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "7up - 20";
    total += 20;
    billtotal.value = total;
    biltext.value += '\n' + newText;
  });
  document.getElementById("appyfizz").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "AppyFizz- 20";
    total += 20;
    billtotal.value = total;
    biltext.value += '\n' + newText;
  });

document.getElementById("lays_gourmet_tc_30").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Lays Gourmet Thai Sweet Chilli - 30";
    total += 30;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

document.getElementById("lays_maxx_bbq_30").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Lays Maxx Sizlin BBQ - 30";
    total += 30;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  
document.getElementById("Doritos_sizlin_hot_30").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Doritos Sizlin Hot - 30";
    total += 30;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

document.getElementById("lays_gourmet_Vinatage_cheese").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Lays Gourmet Vinatage Cheese - 30";
    total += 30;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

document.getElementById("lays_maxx_sizlin_hot").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Lays Maxx Sizlin Hot - 20";
    total += 20;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });
  
document.getElementById("Kurekure_Naughty_tomato").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Kurekure Naughty Tomato - 20";
    total += 20;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

document.getElementById("JimJam_pops").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "JimJam Pops - 20";
    total += 20;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

document.getElementById("JimJam_treat").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "JimJam Treat - 25";
    total += 25;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

document.getElementById("Britania_bourbon").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Britania Bourbon Large - 40";
    total += 40;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  document.getElementById("actii_caramel_popcorn").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Act II Caramel Popcorn - 10";
    total += 10;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  document.getElementById("lays_maxx_nacho_chilli").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Lays Maxx Nacho Chilli - 30";
    total += 30;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  document.getElementById("Doritos_sweet_chilli").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Doritos Sweet Chilli - 30";
    total += 30;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  document.getElementById("Doritos_nacho_cheese").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Doritos Nacho Cheese - 30";
    total += 30;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  document.getElementById("fab_bourbon").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Fab Bourbon - 35";
    total += 35;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  document.getElementById("unibic_choconut").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Unibic Choconut - 40";
    total += 40;
    billtotal.value = total;
    billtext.value += '\n' + newText;
  });

  document.getElementById("hide_n_seek_sandwich").addEventListener("click", function() {
    var billtext = document.getElementById("summary");
    var billtotal = document.getElementById("total");
    var newText = "Hide N seek Sandwich (one flavor) - 38 ";
    total += 38;
    billtotal.value = total;
    billtext.value += '\n' + newText;
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
