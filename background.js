chrome.runtime.sendMessage({ action: "start" });
let his = JSON.parse(localStorage.getItem("myEmissionHistory"));
const JPerByteDataCenter = 3600 * 0.000000072;
let duration = localStorage.getItem("duration");
let stats = localStorage.getItem("stats");
let arr = JSON.parse(his[0]);

// calculate total data transferred
let history = JSON.parse(his[0]);
console.log(history);

let totalData = 0;


for (const property in history) {
  totalData += history[property];
}

// data in MB
let roundedoff = Math.round(totalData / (1024 * 1024));
// carbon footprint in gm
let footprint = ((totalData) * 11) / (1024 * 1024 * 1024);

try {

  document.getElementById("durationtotal").innerText = duration + " Minutes";
  
}
catch{
  console.log("overriden");

}
try {

  document.getElementById("Overall_footprint").innerHTML = "Total Footprint (CO2)= " + Math.round(footprint) + " gm";
  
}
catch{
  console.log("overriden");

}
try {

  document.getElementById("totaldataexchanged").innerHTML = roundedoff + " MB";
  
}
catch{
  console.log("overriden");

}
try {

  document.getElementById("totalfootprint").innerHTML = Math.round(footprint) + " gm";
  
}
catch{
  console.log("overriden");

}
try {

  document.getElementById("totalenergyspent").innerHTML = (footprint*JPerByteDataCenter).toFixed(5) + " J";
}
catch{
  console.log("overriden");

}

try {

  document.getElementById("message").innerHTML = "You have spent " + duration + " minutes in this session and exchanged " + roundedoff + " MB";
  
}
catch{
  console.log("overriden");

}


function buildTable(data) {
  var table = document.getElementById("mynewtable");
  for (const property in history) {
    console.log(history);
    var row = `<tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        
                        <div>
                          <p class="font-semibold">${property}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                      ${((history[property]) * 11) / (1024 * 1024 * 1024)}
                    </td>
                    <td class="px-4 py-3 text-xs">
                      <span
                        class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                      >
                        Approved
                      </span>
                    </td>
                    <td class="px-4 py-3 text-sm">
                      ${history[property]} B
                    </td>
                  </tr>`;
    table.innerHTML += row;
  }
}

buildTable(arr);

console.log(arr);
console.log(his);
console.log(duration);
console.log("Total Data : " + totalData);
//document.getElementById("durationtotal").innerText = duration + " Minutes";

//document.getElementById("totalfootprint").innerText = String(getdata());
