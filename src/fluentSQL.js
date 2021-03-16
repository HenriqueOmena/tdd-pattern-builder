export default class FluentSQLBuilder {
  #database = [];
  #limit = 0;
  #select = 0;
  #where = 0;
  #orderBy = 0;

  constructor({ database }) {
    this.#database = database;
  }

  static for(database) {
    return new FluentSQLBuilder({ database });
  }

  limit(max) {
    this.#limit = max;

    return this;
  }

  select(props) {
    this.#select = props;

    return this;
  }

  where(query) {
    this.#where = query;
    const [[prop, selectedValue]] = Object.entries(query);
    const whereFilter = selectedValue instanceof RegExp ? selectedValue : null;
    // TODO: back here 105

    return this;
  }

  orderBy(field) {
    this.#orderBy = field;

    return this;
  }

  #performLimit(results) {
    return this.#limit && results.length === this.#limit;
  }

  #performWhere(item) {
    return this.#limit && item.length === this.#limit;
  }

  build() {
    const results = [];
    for (const item of this.#database) {
      if (!this.#performWhere(item)) continue;
      results.push(item);

      if (this.#performLimit(results)) break;
    }
    return results;
  }
}
