import { series } from "./data.js";

const tableBody: HTMLElement = document.querySelector("#series-table tbody")!;
const averageRow: HTMLElement = document.getElementById("average-row")!;
const detailContainer: HTMLElement = document.getElementById("serie-detail")!;


let totalSeasons = 0;

series.forEach((serie) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  row.classList.add("serie-row");
  row.style.cursor = "pointer";
  row.addEventListener("click", () => showSerieDetail(serie));
  tableBody.appendChild(row);
  totalSeasons += serie.seasons;
});

const average = totalSeasons / series.length;
averageRow.innerHTML = `<strong>Seasons average: ${average.toFixed(2)}</strong>`;

function showSerieDetail(serie: { id: number; name: string; channel: string; seasons: number; image: string; description: string; link: string; }) {
  detailContainer.innerHTML = `
    <div class="card">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank">${serie.link}</a>
      </div>
    </div>
  `;
}