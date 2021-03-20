export default class TableWebComponent {
  render(data) {
    const tableTeamplate = this.preparedData(data);
    document.body.insertAdjacentHTML("afterbegin", tableTeamplate);
  }

  preparedData(data) {
    const [first] = data;
    const joinLists = (list) => list.join("");
    const tHeaders = Object.keys(first).map((text) => `<th scope=col>${text}</th>`);

    const tBody = data
      .map((item) => Object.values(item))
      .map((item) => item.map((value) => `<td>${value}</td>`))
      .map((tds) => `<tr>${joinLists(tds)}</tr>`);

    return `
      <table class="table table-dark table-striped">
        <thead>
          ${joinLists(tHeaders)}
        </thead>
        <tbody>
          ${joinLists(tBody)}
        </tbody>
      </table>
    `;
  }
}
