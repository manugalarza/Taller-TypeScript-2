import { series } from "./data.js";

const tableBody: HTMLElement = document.querySelector("#series-table tbody")!;
const averageRow: HTMLElement = document.getElementById("average-row")!;

let totalSeasons = 0;

series.forEach((serie) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  tableBody.appendChild(row);
  totalSeasons += serie.seasons;
});

const average = totalSeasons / series.length;
averageRow.innerHTML = `<strong>Seasons average: ${average.toFixed(2)}</strong>`;
