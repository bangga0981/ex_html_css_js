function insertRow() {
    var x = document.getElementById("JST").insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    var t = x.insertCell(2);
    y.innerHTML = "N Row1";
    z.innerHTML = "N Row2";
    t.innerHTML = "N Row3";
  }
  