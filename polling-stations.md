---
layout: page
title: "Vituo vya Kura (Polling Stations)"
permalink: /polling-stations/
---

<div class="bg-primary text-secondary p-8 rounded-2xl mb-10 shadow-lg">
    <h2 class="text-3xl font-black uppercase mb-2">Tafuta Kituo Chako</h2>
    <p class="text-white opacity-90">Hakikisha unajua mahali pa kupiga kura ili tushinde asubuhi na mapema!</p>
</div>

<div class="mb-8">
    <input type="text" id="stationSearch" onkeyup="filterStations()" placeholder="Andika jina la kituo au wadi hapa... (e.g. Junju)" class="w-full p-4 rounded-xl border-2 border-primary focus:ring-2 focus:ring-secondary outline-none text-lg shadow-sm">
</div>

<div class="overflow-x-auto">
    <table class="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm" id="stationsTable">
        <thead>
            <tr class="bg-primary text-secondary uppercase text-sm">
                <th class="p-4 border-b border-green-800">Wadi (Ward)</th>
                <th class="p-4 border-b border-green-800">Kituo cha Usajili</th>
                <th class="p-4 border-b border-green-800">Jina la Kituo (Polling Station)</th>
                <th class="p-4 border-b border-green-800">Wapiga Kura</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            {% for station in site.data.stations %}
            <tr class="hover:bg-yellow-50 transition">
                <td class="p-4 font-bold text-primary">{{ station["Caw_ Name"] }}</td>
                <td class="p-4 text-gray-700">{{ station["Reg_ Centre_ Name"] }}</td>
                <td class="p-4 font-medium">{{ station["Polling_ Station_ Name"] }}</td>
                <td class="p-4 text-gray-500">{{ station["Registered_ Voters"] }}</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>

<script>
function filterStations() {
  var input, filter, table, tr, td, i, j, txtValue, found;
  input = document.getElementById("stationSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("stationsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    found = false;
    for (j = 0; j < td.length; j++) {
      if (td[j]) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          found = true;
          break;
        }
      }
    }
    if (found) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
</script>