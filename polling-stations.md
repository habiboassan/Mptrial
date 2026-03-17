---
layout: page
title: "Vituo vya Kura (Polling Stations)"
permalink: /polling-stations/
---

<div class="bg-primary text-secondary p-10 rounded-3xl mb-10 shadow-2xl border-b-8 border-secondary text-center">
    <h1 class="text-4xl font-black uppercase tracking-tighter mb-4">Tafuta Mahali Pako</h1>
    <p class="text-xl text-white opacity-95">Andika jina la Ward yako au Kijiji chako kupata kituo cha karibu.</p>
</div>

<div class="max-w-3xl mx-auto mb-12">
    <div class="relative">
        <input type="text" id="stationSearch" onkeyup="filterTable()" 
               placeholder="Unatoka wapi? (Mfano: Junju, Mtwapa, Mtepeni...)" 
               class="w-full p-6 text-2xl rounded-2xl border-4 border-primary focus:border-secondary outline-none shadow-lg transition-all font-bold text-primary">
        <div class="absolute right-6 top-6 text-primary opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    </div>
</div>

<div id="noResults" class="hidden text-center py-10">
    <p class="text-2xl font-bold text-gray-400 italic">Pole, hatujapata kituo hicho. Jaribu tena...</p>
</div>

<div class="overflow-x-auto bg-white rounded-3xl shadow-2xl border border-gray-100">
    <table id="stationsTable" class="w-full text-left border-collapse">
        <thead>
            <tr class="bg-primary text-secondary uppercase text-sm tracking-widest">
                <th class="p-6 border-b-2 border-secondary">Wadi (Ward)</th>
                <th class="p-6 border-b-2 border-secondary">Kituo cha Usajili (Centre)</th>
                <th class="p-6 border-b-2 border-secondary text-center">Wapiga Kura</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            {% if site.data.stations %}
                {% for row in site.data.stations %}
                <tr class="station-row hover:bg-yellow-50 transition-colors">
                    <td class="p-6 font-bold text-primary">{{ row.CAW_Name }}</td>
                    <td class="p-6 font-medium text-gray-800">{{ row.Reg_Centre_Name }}</td>
                    <td class="p-6 text-center">
                        <span class="bg-secondary text-primary font-black px-4 py-2 rounded-full text-sm">
                            {{ row.Total_Registered_Voters }}
                        </span>
                    </td>
                </tr>
                {% endfor %}
            {% else %}
                <tr>
                    <td colspan="3" class="p-20 text-center text-red-500 font-black text-xl uppercase">
                        Data Isiyopatikana!
                    </td>
                </tr>
            {% endif %}
        </tbody>
    </table>
</div>

<script>
function filterTable() {
    const input = document.getElementById("stationSearch");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("stationsTable");
    const tr = table.getElementsByClassName("station-row");
    const noResults = document.getElementById("noResults");
    let count = 0;

    for (let i = 0; i < tr.length; i++) {
        const rowText = tr[i].textContent || tr[i].innerText;
        if (rowText.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            count++;
        } else {
            tr[i].style.display = "none";
        }
    }

    // Show table or 'No Results' message
    if (count === 0 && filter !== "") {
        table.style.display = "none";
        noResults.classList.remove("hidden");
    } else {
        table.style.display = "table";
        noResults.classList.add("hidden");
    }
}
</script>