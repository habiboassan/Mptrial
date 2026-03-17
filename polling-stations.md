---
layout: page
title: "Vituo vya Kura"
permalink: /polling-stations/
---

<div style="background: #1b5e20; color: #ffd600; padding: 30px; border-radius: 20px; margin-bottom: 30px; text-align: center; border-bottom: 5px solid #ffd600;">
    <h1 style="font-weight: 900; text-transform: uppercase; margin: 0; letter-spacing: -1px;">Vituo vya Kura (Kilifi South)</h1>
    <p style="color: white; margin-top: 10px; font-weight: 500;">Tafuta kituo chako cha usajili na idadi ya wapiga kura.</p>
</div>

<div style="margin-bottom: 25px;">
    <input type="text" id="stationSearch" onkeyup="filterTable()" placeholder="Andika jina la Wadi au Kituo (mfano: Mtwapa)..." 
        style="width: 100%; padding: 18px; font-size: 18px; border: 3px solid #1b5e20; border-radius: 15px; outline: none; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
</div>

<div style="overflow-x: auto; background: white; border-radius: 20px; shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #eee;">
    <table id="stationsTable" style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
            <tr style="background: #1b5e20; color: #ffd600; text-transform: uppercase; font-size: 13px; letter-spacing: 1px;">
                <th style="padding: 20px; border-bottom: 2px solid #ffd600;">Wadi (Ward)</th>
                <th style="padding: 20px; border-bottom: 2px solid #ffd600;">Kituo (Centre)</th>
                <th style="padding: 20px; border-bottom: 2px solid #ffd600; text-align: center;">Wapiga Kura</th>
            </tr>
        </thead>
        <tbody style="font-size: 16px;">
            {% if site.data.stations %}
                {% for row in site.data.stations %}
                <tr style="border-bottom: 1px solid #f0f0f0;" class="station-row">
                    <td style="padding: 18px; font-weight: bold; color: #1b5e20;">{{ row.CAW_Name }}</td>
                    <td style="padding: 18px; color: #333; font-weight: 500;">{{ row.Reg_Centre_Name }}</td>
                    <td style="padding: 18px; font-weight: 900; color: #444; text-align: center; background: #fffde7;">{{ row.Total_Registered_Voters }}</td>
                </tr>
                {% endfor %}
            {% else %}
                <tr>
                    <td colspan="3" style="padding: 50px; text-align: center; color: #e53935; font-weight: bold;">
                        Haikuweza kusoma data. Tafadhali hakikisha file limeitwa 'stations.csv' ndani ya folder la '_data'.
                    </td>
                </tr>
            {% endif %}
        </tbody>
    </table>
</div>

<script>
function filterTable() {
    var input = document.getElementById("stationSearch");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("stationsTable");
    var tr = table.getElementsByTagName("tr");

    for (var i = 1; i < tr.length; i++) {
        var rowText = tr[i].textContent || tr[i].innerText;
        if (rowText.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
</script>