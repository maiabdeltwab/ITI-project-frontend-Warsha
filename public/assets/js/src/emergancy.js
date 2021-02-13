var data;
  var rate = "", j = 0;
  localStorage.setItem('location2', 'giza')
  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }
  function loadData() {
    rate = "";
    j = 0;
    var cnt = 0;
    document.getElementById("workShops").innerHTML = "";
    loc = localStorage.location2;

    readTextFile("Data.json", function (text) {
      var data = JSON.parse(text);

      

      for (var i = 0; i < data.length; i++) {
        rate = "";
        j = 0;
        if (data[i].location == loc) {

          var tr = document.createElement('div');
          tr.className = "row";
          var td = document.createElement('div');
          td.className = "col-md-12 WshopTd";

          for (j = 0; j < parseInt(data[i].rate); j++)
            rate += "<i class='fa fa-star rate'></i>"
          if (data[i].rate % 1 != 0) {
            rate += "<i class='fa fa-star-half-empty rate'></i>"
            j++;
          }
          for (j; j < 5; j++)
            rate += "<i class='fa fa-star-o rate'></i>"

          td.innerHTML = "  <div class='card' style = ' max-width: 90% !important;'>   <div class='logo' style='background-image:" + data[i].icon + "'>  </div>   <div class='card-text'>   <div  class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>  <div class='title'>" + rate + " </div><div class='row'> <div class='col-sm-6 pleft'>  <h2>" + data[i].name + " </h2>   <div class='address' ><i class='fas fa-building icolor'> </i> &nbsp; " + data[i].address + "</div> <div class='phone' > <i class='fas  fa-mobile-alt	 icolor'> </i> &nbsp;"+ data[i].phonenumber +  "</div> </div> <div class='col-sm-6 rcorner'> <br>  <div> <i class='fas  fa-snowplow	 icolor'> </i> &nbsp; Winch service   </div>  <div> <i class='fas  fa-mobile-alt	 icolor'> </i> &nbsp;  &nbsp; Urgent <span> immediate </span>maintenance  service  </div>  </div>     </div>  </div>     </div>    ";

          tr.appendChild(td);

          document.getElementById("workShops").appendChild(tr);
        }

        cnt++;
      }
    }
    );
  }

  loadData();

  console.log(localStorage);