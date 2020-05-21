import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-component-with-table-example',
  templateUrl: './component-with-table-example.component.html',
  styleUrls: ['./component-with-table-example.component.scss']
})
export class ComponentWithTableExampleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'weight', 'year'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  dataSource = new RobertDataSource();
  dataSource2 = new MatTableDataSource<Robert>();
  years = [2015, 2016, 2017, 2018, 2019, 2020];
  selectedYear: number;
  data = [
    { id: 1, name: 'Robert 1', year: 2015},
    { id: 2, name: 'Robert 2', year: 2017},
    { id: 3, name: 'Robert 3', year: 2020},
    { id: 4, name: 'Robert 5', year: 2018},
  ];

  constructor(
    //private service: Service
  ) { }

  ngOnInit() {
  }

  hideColumn(columnToHide) {
    const copyOfColumns = this.displayedColumns.slice();
    if (!columnToHide.value) {
      this.columnsToDisplay = copyOfColumns;
      return;
    }
    this.columnsToDisplay = copyOfColumns.filter(col => col !== columnToHide.value);
  }

  onRefreshButtonClick() {
    if (!this.selectedYear) {
      return;
    }
  }

}

export class RobertDataSource extends DataSource<any> {
  // FAKE DATA
  data = [
    { id: 1, name: 'Robert 1', year: 2015},
    { id: 2, name: 'Robert 2', year: 2017},
    { id: 3, name: 'Robert 3', year: 2020},
    { id: 4, name: 'Robert 5', year: 2018},
  ];
  constructor() {
    super();
  }

  connect(): Observable<Robert[]> {
    return of([
      { id: 1, name: 'Robert 1', year: 2015},
      { id: 2, name: 'Robert 2', year: 2017},
      { id: 3, name: 'Robert 3', year: 2020},
    ]);
  }

  disconnect() {

  }

  refresh(year: number) {

  }
}

export class Robert {
  id: number;
  name: string;
  year: number;

  constructor() {

  }
}
