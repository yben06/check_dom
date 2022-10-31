function totalsvalue() {
    var quantity = document.getElementsByClassName("quantity");
    var price = document.getElementsByClassName("price");
    var totals = document.getElementById("totals");
    var sum = 0;
    for (var i = 0; i < price.length; i++) {
      sum += parseInt(quantity[i].value) * parseInt(price[i].textContent);
    }
    totals.value = `${sum}€`;
  }
  var incbtn = document.getElementsByClassName("fa-solid fa-plus");
  var prices = document.getElementsByClassName("price").textContent;
  for (var i = 0; i < incbtn.length; i++) {
    var btninc = incbtn[i];
    btninc.addEventListener("click", function (event) {
      var btnadd = event.target;
      var add = btnadd.parentElement.querySelector(".quantity");
      add.setAttribute("value", parseInt(add.value) + 1);
      totalsvalue();
    });
  }
  var incbtn = document.getElementsByClassName("fa-solid fa-minus");
  var prices = document.getElementsByClassName("price").textContent;
  for (var i = 0; i < incbtn.length; i++) {
    var btninc = incbtn[i];
    btninc.addEventListener("click", function (event) {
      var btnadd = event.target;
      var add = btnadd.parentElement.querySelector(".quantity");
      if (parseInt(add.value) > 0) {
        add.setAttribute("value", parseInt(add.value) - 1);
        totalsvalue();
      }
    });
  }
  var delbtn = document.getElementsByClassName("fa-solid fa-trash");
  for (var i = 0; i < delbtn.length; i++) {
    var btn = delbtn[i];
    btn.addEventListener("click", function (event) {
      var btnclicked = event.target;
        btnclicked.parentElement.parentElement.remove();
        totalsvalue();
    });
  }
  var libtn = document.getElementsByClassName("fa-solid fa-heart");
  for (var i = 0; i < libtn.length; i++) {
    var btn = libtn[i];
    btn.addEventListener("click", function (event) {
      var btnclicked = event.target;
      if (btnclicked.style.color != "red") {
        btnclicked.style.color = "red";
      } else {
        btnclicked.style.color = "black";
      }
    });
  }