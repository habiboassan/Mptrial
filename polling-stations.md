---
layout: page
title: "Vituo vya Kura (Polling Stations)"
permalink: /polling-stations/
---

<div class="bg-primary text-secondary p-8 rounded-2xl mb-10 shadow-lg">
    <h2 class="text-3xl font-black uppercase mb-2">Tafuta Kituo Chako</h2>
    <p class="text-white opacity-90">Tafuta jina la kituo chako hapa chini.</p>
</div>

<div class="mb-8">
    <input type="text" id="stationSearch" onkeyup="filterStations()" placeholder="Andika jina la kituo au wadi (e.g. Junju)..." class="w-full p-5 rounded-2xl border-4 border-secondary focus:border-primary outline-none text-lg shadow-md font-bold text-primary">
</div>

<div class="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200">
    <table class="w-full text-left border-collapse" id="stationsTable">
        <thead>
            <tr class="bg-primary text-secondary uppercase text-sm">
                <th class="p-4">Wadi (Ward)</th>
                <th class="p-4">Jina la Kituo (Station)</th>
                <th class="p-4">Wapiga Kura</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            {% if site.data.stations %}
              {% for station in site.data.stations %}
              <tr class="hover:bg-yellow-50 transition">
                  <td class="p-4 font-bold text-primary">{{ station["Caw_ Name"] }}</td>
                  <td class="p-4 text-gray-800">{{ station["Polling_ Station_ Name"] }}</td>
                  <td class="p-4 font-black text-gray-600">{{ station["Registered_ Voters"] }}</td>
              </tr>
              {% endfor %}
            {% else %}
              <tr>
                  <td colspan="3" class="p-10 text-center text-red-500 font-bold">
                      Data haijapatikana. Hakikisha 'stations.csv' ipo ndani ya folder la '_data'.
                  </td>
              </tr>
            {% endif %}
        </tbody>
    </table>
</div>

<script>
function filterStations() {
  const input = document.getElementById("stationSearch");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("stationsTable");
  const tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    let rowContent = tr[i].textContent || tr[i].innerText;
    tr[i].style.display = rowContent.toUpperCase().indexOf(filter) > -1 ? "" : "none";
  }
}
</script>