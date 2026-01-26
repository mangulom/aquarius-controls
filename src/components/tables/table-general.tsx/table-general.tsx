import { Component, Prop, h, State, Watch } from '@stencil/core';

export type TableColor = 'PRIMARY' | 'SUCCESS' | 'DANGER' | 'WARNING' | 'INFO' | 'SECONDARY' | 'DARK' | 'LIGHT';

@Component({
  tag: 'table-general',
  styleUrl: 'table-general.css',
  shadow: false
})
export class TableGeneral {

  /** Columnas: { key: string, label: string, color } */
  @Prop() columns: any[] | string = [];  

  /** Datos: arreglo de objetos */
  @Prop() data: any[] | string = [];  

  @State() sortedData: any[] = [];
  @State() sortKey: string = '';
  @State() sortAsc: boolean = true;

  /** Convierte strings JSON a arrays reales */
  private parseProp(prop: any): any[] {
    if (typeof prop === 'string') {
      try { return JSON.parse(prop); } catch { return []; }
    }
    return prop || [];
  }

  @Watch('data')
  @Watch('columns')
  watchProps() {
    this.sortedData = this.parseProp(this.data);
  }

  componentWillLoad() {
    this.columns = this.parseProp(this.columns);
    this.sortedData = this.parseProp(this.data);
  }

  private sortByColumn(key: string) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }

    const dataArr = this.parseProp(this.data);

    this.sortedData = [...dataArr].sort((a, b) => {
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
    const columnsArr = this.parseProp(this.columns);
    return (
      <div class="table-responsive">
        <table class="styled-table">
          <thead>
            <tr>
              {columnsArr.map(col => (
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
                {columnsArr.map(col => (
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
