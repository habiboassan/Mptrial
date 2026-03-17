---
layout: page
title: "Vituo vya Kura (Polling Stations)"
permalink: /polling-stations/
---

<div style="background: #1b5e20; color: #ffd600; padding: 30px; border-radius: 20px; margin-bottom: 30px; text-align: center; border-bottom: 5px solid #ffd600;">
    <h1 style="font-weight: 900; text-transform: uppercase; margin: 0;">Tafuta Kituo Chako</h1>
    <p style="color: white; margin-top: 10px;">Chagua Wadi yako hapa chini kuona vituo vyote.</p>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 25px;">
    
    <select id="wardSelect" onchange="filterTable()" 
            style="flex: 1; min-width: 200px; padding: 18px; font-size: 18px; border: 3px solid #1b5e20; border-radius: 15px; outline: none; font-weight: bold; color: #1b5e20; background-color: white; cursor: pointer;">
        <option value="">Wadi Zote (All Wards)</option>
        <option value="JUNJU">Junju</option>
        <option value="MWARAKAYA">Mwarakaya</option>
        <option value="SHIMO LA TEWA">Shimo la Tewa</option>
        <option value="CHASIMBA">Chasimba</option>
        <option value="MTEPENI">Mtepeni</option>
    </select>

    <input type="text" id="stationSearch" onkeyup="filterTable()" 
           placeholder="Tafuta jina la kituo (Hiari)..." 
           style="flex: 2; min-width: 200px; padding: 18px; font-size: 18px; border: 3px solid #1b5e20; border-radius: 15px; outline: none; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
</div>

<div id="noResults" style="display: none; text-align: center; padding: 40px;">
    <p style="font-size: 20px; color: #999; font-style: italic;">Pole, hatujapata kituo hicho. Jaribu tena...</p>
</div>

<div style="overflow-x: auto; background: white; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
    <table id="stationsTable" style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
            <tr style="background: #1b5e20; color: #ffd600; text-transform: uppercase; font-size: 13px;">
                <th style="padding: 20px; border-bottom: 2px solid #ffd600; width: 30%;">Wadi (Ward)</th>
                <th style="padding: 20px; border-bottom: 2px solid #ffd600; width: 50%;">Kituo (Centre)</th>
                <th style="padding: 20px; border-bottom: 2px solid #ffd600; text-align: center; width: 20%;">Idadi</th>
            </tr>
        </thead>
        <tbody style="font-size: 16px;">
            {% assign data_source = site.data.stations | default: site.data.Stations %}

            {% if data_source %}
                {% for row in data_source %}
                <tr style="border-bottom: 1px solid #f0f0f0;" class="station-row">
                    <td class="ward-cell" style="padding: 18px; font-weight: bold; color: #1b5e20;">
                        {{ row.CAW_Name | default: row["﻿CAW_Name"] }}
                    </td>
                    <td class="centre-cell" style="padding: 18px; color: #333; font-weight: 500;">
                        {{ row.Reg_Centre_Name }}
                    </td>
                    <td style="padding: 18px; text-align: center;">
                        <span style="background: #ffd600; color: #1b5e20; font-weight: 900; padding: 5px 15px; border-radius: 20px; font-size: 14px;">
                            {{ row.Total_Registered_Voters }}
                        </span>
                    </td>
                </tr>
                {% endfor %}
            {% else %}
                <tr>
                    <td colspan="3" style="padding: 50px; text-align: center; color: #e53935; font-weight: bold;">
                        Data haipatikani.
                    </td>
                </tr>
            {% endif %}
        </tbody>
    </table>
</div>

<script>
function filterTable() {
    // Get values from BOTH the dropdown and the text box
    var wardFilter = document.getElementById("wardSelect").value.toUpperCase();
    var textFilter = document.getElementById("stationSearch").value.toUpperCase();
    
    var table = document.getElementById("stationsTable");
    var tr = table.getElementsByClassName("station-row");
    var noResults = document.getElementById("noResults");
    var count = 0;

    for (var i = 0; i < tr.length; i++) {
        var tdWard = tr[i].getElementsByClassName("ward-cell")[0];
        var tdCentre = tr[i].getElementsByClassName("centre-cell")[0];

        if (tdWard && tdCentre) {
            var wardText = tdWard.textContent || tdWard.innerText;
            var centreText = tdCentre.textContent || tdCentre.innerText;

            // Check if the row matches the selected Ward AND the typed text
            var matchesWard = (wardFilter === "" || wardText.toUpperCase().indexOf(wardFilter) > -1);
            var matchesText = (textFilter === "" || centreText.toUpperCase().indexOf(textFilter) > -1);

            if (matchesWard && matchesText) {
                tr[i].style.display = "";
                count++;
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    // Show or hide the table and "No Results" message
    if (count === 0) {
        table.style.display = "none";
        noResults.style.display = "block";
    } else {
        table.style.display = "table";
        noResults.style.display = "none";
    }
}
</script>