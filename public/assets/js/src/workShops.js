var data;
var rate = "", j = 0;

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
    document.getElementById("workShops").innerHTML = "";

    readTextFile("Data.json", function (text) {
        var data = JSON.parse(text);
        for (var i = 0; i < data.length; i++) {

            rate = "";
            j = 0;

            if (i % 2 == 0) {
                var tr = document.createElement('div');
                tr.className = "row";
            }

            var td = document.createElement('div');
            td.className = "col-md-6 WshopTd";

            for (j = 0; j < parseInt(data[i].rate); j++)
                rate += "<i class='fa fa-star rate'></i>"
            if (data[i].rate % 1 != 0) {
                rate += "<i class='fa fa-star-half-empty rate'></i>"
                j++;
            }
            for (j; j < 5; j++)
                rate += "<i class='fa fa-star-o rate'></i>"

            //td.innerHTML = " <td class='WshopTd'> <div class='card'>   <div class='logo' style='background-image:" + data[i].icon + "'>    </div>   <div class='card-text'>   <div class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>            <div class='title'>Work Shop Rate :" + data[i].rate + " </div>  <h2>" + data[i].name + " </h2>    <div class='address'> " + data[i].address + "</div>  <div class='actions'>             <button class='wsbtn' id='" + data[i].id + "'>  <div >Show more</div> </button>     </div>     </div>  </div>     </div>   </td> ";
            td.innerHTML = "                      <div class='card '>  <div class='logo' style='background-image:" + data[i].icon + "'>    </div>   <div class='card-text'>   <div class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>            <div class='title'>" + rate + "                             </div>  <h2>" + data[i].name + " </h2>    <div class='address'> " + data[i].address + "</div>   <div class='actions mt-auto btn'> <button class='wsbtn' id=' " + data[i].id + "'> <div>Show more</div>  </button>     </div>     </div>  </div>     </div>";

            tr.appendChild(td);
            if (i % 2 == 1) {
                document.getElementById("workShops").appendChild(tr);
            }
        }

    });
}

loadData();

function filterCity() {
    rate = "";
    j = 0;
    var cnt = 0;
    document.getElementById("workShops").innerHTML = "";
    city = document.getElementById("select-box1").value;
    readTextFile("Data.json", function (text) {
        var data = JSON.parse(text);
        for (var i = 0; i < data.length; i++) {
            rate = "";
            j = 0;

            if (data[i].city == city) {

                if (cnt % 2 == 0) {
                    var tr = document.createElement('div');
                    tr.className = "row";
                }

                var td = document.createElement('div');
                td.className = "col-md-6 WshopTd";

                for (j = 0; j < parseInt(data[i].rate); j++)
                    rate += "<i class='fa fa-star rate'></i>"
                if (data[i].rate % 1 != 0) {
                    rate += "<i class='fa fa-star-half-empty rate'></i>"
                    j++;
                }
                for (j; j < 5; j++)
                    rate += "<i class='fa fa-star-o rate'></i>"

                td.innerHTML = "  <div class='card'>   <div class='logo' style='background-image:" + data[i].icon + "'>    </div>   <div class='card-text'>   <div  class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>  <div class='title'>" + rate + " </div>  <h2>" + data[i].name + " </h2>    <div class='address'> " + data[i].address + "</div>  <div class='actions mt-auto btn'>    <button class='wsbtn' id='" + data[i].id + " .btn'><div  >Show more</div></button>     </div>     </div>  </div>     </div>    ";

                tr.appendChild(td);
                if (cnt % 2 == 1) {
                    document.getElementById("workShops").appendChild(tr);
                }
            }
            cnt++;
        }

    });

}



function filterLoction() {
    rate = "";
    j = 0;
    var cnt = 0;
    document.getElementById("workShops").innerHTML = "";
    loc = document.getElementById("select-box2").value;
    readTextFile("Data.json", function (text) {
        var data = JSON.parse(text);

        var tr = document.createElement('div');
        tr.className = "row";

        for (var i = 0; i < data.length; i++) {
            rate = "";
            j = 0;

            if (data[i].location == loc) {

                var td = document.createElement('div');
                td.className = "col-md-6 WshopTd";

                for (j = 0; j < parseInt(data[i].rate); j++)
                    rate += "<i class='fa fa-star rate'></i>"
                if (data[i].rate % 1 != 0) {
                    rate += "<i class='fa fa-star-half-empty rate'></i>"
                    j++;
                }
                for (j; j < 5; j++)
                    rate += "<i class='fa fa-star-o rate'></i>"

                td.innerHTML = "  <div class='card'>   <div class='logo' style='background-image:" + data[i].icon + "'>    </div>   <div class='card-text'>   <div  class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>  <div class='title'>" + rate + " </div>  <h2>" + data[i].name + " </h2>    <div class='address'> " + data[i].address + "</div>  <div class='actions mt-auto btn'>    <button class='wsbtn' id='" + data[i].id + "'><div  >Show more</div></button>     </div>     </div>  </div>     </div>    ";
                td.innerHTML = "  <div class='card'>   <div class='logo' style='background-image:" + data[i].icon + "'>    </div>   <div class='card-text'>   <div  class='portada' style='background-image:" + data[i].image + "'>   </div>  <div class='title-total'>  <div class='title'>" + rate + " </div>  <h2>" + data[i].name + " </h2>    <div class='address'> " + data[i].address + "</div>  <div class='actions mt-auto btn'>    <button class='wsbtn' id='" + data[i].id + "'><div  >Show more</div></button>     </div>     </div>  </div>     </div>    ";

                tr.appendChild(td);

                document.getElementById("workShops").appendChild(tr);
            }

            cnt++;
        }

    });
}
