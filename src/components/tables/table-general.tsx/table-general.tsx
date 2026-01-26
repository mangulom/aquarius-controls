import { Component, Prop, h, State, Watch } from '@stencil/core';

export type TableColor = 'PRIMARY' | 'SUCCESS' | 'DANGER' | 'WARNING' | 'INFO' | 'SECONDARY' | 'DARK' | 'LIGHT';

@Component({
  tag: 'table-general',
  styleUrl: 'table-general.css',
  shadow: false,
})
export class TableGeneral {

  /** Columnas: { key: string, label: string, color?: TableColor } */
  @Prop() columns: { key: string, label: string, color?: TableColor }[] = [];

  /** Datos: arreglo de objetos, pasado desde la app consumidora */
  @Prop() data: any[] = [];

  @State() sortedData: any[] = [];
  @State() sortKey: string = '';
  @State() sortAsc: boolean = true;

  @Watch('data')
  watchData() {
    this.sortedData = [...this.data];
  }

  componentWillLoad() {
    this.sortedData = [...this.data];
  }

  private sortByColumn(key: string) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }

    this.sortedData = [...this.sortedData].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];
      if (valA == null) return 1;
      if (valB == null) return -1;
      if (valA < valB) return this.sortAsc ? -1 : 1;
      if (valA > valB) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }

  render() {
    return (
      <div class="table-responsive">
        <table class="styled-table">
          <thead>
            <tr>
              {this.columns.map(col => (
                <th
                  class={col.color ? `th-${col.color.toLowerCase()}` : ''}
                  onClick={() => this.sortByColumn(col.key)}
                >
                  {col.label}
                  {this.sortKey === col.key && (
                    <span class="sort-indicator">{this.sortAsc ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.sortedData.map(row => (
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
