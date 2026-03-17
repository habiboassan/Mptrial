---
layout: page
title: "Vituo vya Kura (Polling Stations)"
permalink: /polling-stations/
---

<div style="background: #1b5e20; color: #ffd600; padding: 30px; border-radius: 20px; margin-bottom: 30px; text-align: center; border-bottom: 5px solid #ffd600;">
    <h1 style="font-weight: 900; text-transform: uppercase; margin: 0;">Tafuta Mahali Pako</h1>
    <p style="color: white; margin-top: 10px;">Andika Wadi yako au Kituo kupata idadi ya wapiga kura.</p>
</div>

<div style="margin-bottom: 25px;">
    <input type="text" id="stationSearch" onkeyup="filterTable()" 
           placeholder="Unatoka wapi? (Mfano: Junju, Mtwapa, Mtepeni...)" 
           style="width: 100%; padding: 18px; font-size: 18px; border: 3px solid #1b5e20; border-radius: 15px; outline: none; box-shadow: 0 4px 10px rgba(0,0,0,0.05); font-weight: bold; color: #1b5e20;">
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
                    <td style="padding: 18px; font-weight: bold; color: #1b5e20;">
                        {{ row.CAW_Name | default: row.caw_name | default: row["CAW_Name"] }}
                    </td>
                    <td style="padding: 18px; color: #333; font-weight: 500;">
                        {{ row.Reg_Centre_Name | default: row.reg_centre_name | default: row["Reg_Centre_Name"] }}
                    </td>
                    <td style="padding: 18px; text-align: center;">
                        <span style="background: #ffd600; color: #1b5e20; font-weight: 900; padding: 5px 15px; border-radius: 20px; font-size: 14px;">
                            {{ row.Total_Registered_Voters | default: row.total_registered_voters | default: row["Total_Registered_Voters"] }}
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
    var input = document.getElementById("stationSearch");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("stationsTable");
    var tr = table.getElementsByClassName("station-row");
    var noResults = document.getElementById("noResults");
    var count = 0;

    for (var i = 0; i < tr.length; i++) {
        // This line grabs ALL text in the row to make sure Ward, Centre, and Numbers are searchable
        var rowText = tr[i].innerText || tr[i].textContent;
        if (rowText.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            count++;
        } else {
            tr[i].style.display = "none";
        }
    }

    if (count === 0 && filter !== "") {
        table.style.display = "none";
        noResults.style.display = "block";
    } else {
        table.style.display = "table";
        noResults.style.display = "none";
    }
}
</script>