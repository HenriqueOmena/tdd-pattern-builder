import chalk from "chalk";
import chalkTable from "chalk-table";

export default class TableConsoleComponent {
  render(data) {
    const columns = this.preparedData(data);

    const options = {
      leftPad: 2,
      columns,
    };

    const table = chalkTable(options, data);
    console.log(table);
  }

  preparedData(data) {
    const [first] = data;
    const headers = Object.keys(first);
    const formatHeader = (data, index) =>
      index % 2 === 0 ? chalk.yellow(data) : chalk.green(data);

    return headers.map((header, i) => ({
      field: header,
      name: formatHeader(header, i),
    }));
  }
}
