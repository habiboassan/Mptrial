---
layout: page
title: "Vituo vya Kura"
permalink: /polling-stations/
---

<div style="background: #1b5e20; color: #ffd600; padding: 30px; border-radius: 20px; margin-bottom: 30px; text-align: center;">
    <h1 style="font-weight: 900; text-transform: uppercase; margin: 0;">Vituo vya Kura</h1>
</div>

<input type="text" id="stationSearch" onkeyup="filterTable()" placeholder="Tafuta Wadi au Kituo..." 
    style="width: 100%; padding: 15px; font-size: 18px; border: 3px solid #ffd600; border-radius: 12px; margin-bottom: 20px;">

<div style="overflow-x: auto; background: white; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <table id="stationsTable" style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr style="background: #1b5e20; color: white;">
                <th style="padding: 15px;">Wadi</th>
                <th style="padding: 15px;">Kituo</th>
                <th style="padding: 15px;">Wapiga Kura</th>
            </tr>
        </thead>
        <tbody>
            {% comment %} Check for both lowercase and uppercase filenames {% endcomment %}
            {% assign mydata = site.data.stations | default: site.data.Stations %}
            
            {% if mydata %}
                {% for row in mydata %}
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 15px; font-weight: bold;">{{ row[0] | default: row.CAW_Name }}</td>
                    <td style="padding: 15px;">{{ row[2] | default: row.Reg_Centre_Name }}</td>
                    <td style="padding: 15px; font-weight: bold;">{{ row[3] | default: row.Total_Registered_Voters }}</td>
                </tr>
                {% endfor %}
            {% else %}
                <tr>
                    <td colspan="3" style="padding: 40px; text-align: center; color: red;">
                        Bado faili halionekani. 
                        <br>Hakikisha faili lipo hapa: <strong>_data/stations.csv</strong>
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
    var tr = document.getElementById("stationsTable").getElementsByTagName("tr");
    for (var i = 1; i < tr.length; i++) {
        tr[i].style.display = (tr[i].textContent.toUpperCase().indexOf(filter) > -1) ? "" : "none";
    }
}
</script>