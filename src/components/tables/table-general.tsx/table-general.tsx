import { Component, Prop, h, State } from '@stencil/core';

export type TableColor = 'PRIMARY' | 'SUCCESS' | 'DANGER' | 'WARNING' | 'INFO' | 'SECONDARY' | 'DARK' | 'LIGHT';

@Component({
  tag: 'table-general',
  styleUrl: 'table-general.css',
  shadow: false,
})
export class TableGeneral {

  /** Array de objetos a mostrar */
  @Prop() data: any[] = [];

  /** Columnas: { key: string, label: string, color?: TableColor } */
  @Prop() columns: { key: string, label: string, color?: TableColor }[] = [];

  @State() sortKey: string = '';
  @State() sortAsc: boolean = true;

  private sortByColumn(key: string) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
  }

  private getSortedData() {
    if (!this.sortKey) return this.data;
    return [...this.data].sort((a, b) => {
      const valA = a[this.sortKey];
      const valB = b[this.sortKey];
      if (valA < valB) return this.sortAsc ? -1 : 1;
      if (valA > valB) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }

  render() {
    const sortedData = this.getSortedData();

    return (
      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              {this.columns.map(col => (
                <th
                  class={col.color ? `th-${col.color.toLowerCase()}` : ''}
                  onClick={() => this.sortByColumn(col.key)}
                >
                  {col.label}
                  {this.sortKey === col.key && (
                    <span>{this.sortAsc ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map(row => (
              <tr>
                {this.columns.map(col => (
                  <td>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
