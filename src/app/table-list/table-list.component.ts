import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ElementsService } from './table-list.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedStudentColumns: string[] = ['rollNo', 'firstName', 'lastName', 'marks'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSourceElement = new MatTableDataSource<Element>();
  dataSourceStudent = new MatTableDataSource<Student>();

  elementsService = new ElementsService(this.httpClient);

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) studentPaginator: MatPaginator;
  @ViewChild(MatSort) studentSort: MatSort;

  ngAfterViewInit() {
    //this.elementsService.getElements().subscribe((data: Element[]) => {
    //  this.dataSourceElement.data = data;
      //console.log(JSON.stringify(data));
    //});
    this.elementsService.getStudents().subscribe((data: Student[]) => {
      this.dataSourceStudent.data = data;
      //console.log(JSON.stringify(data));
    
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    //this.dataSourceElement.paginator = this.paginator;
    //this.dataSourceElement.sort = this.sort;

    //this.dataSourceStudent.paginator = this.studentPaginator;
    //this.dataSourceStudent.sort = this.studentSort;

    
  }

  data: Array<any>;
  elementData: Element[];
  
  constructor(private httpClient: HttpClient){
    this.data = [
        { id: '1', Name: 'Dasan', country: 'India', city: 'Bengaluru', salary: '35000' },
        { id: '2', Name: 'Dasan', country: 'India', city: 'Bengaluru', salary: '35000' },
        { id: '3', Name: 'Dasan', country: 'India', city: 'Bengaluru', salary: '35000' },
        { id: '4', Name: 'Dasan', country: 'India', city: 'Bengaluru', salary: '35000' },
        { id: '5', Name: 'Dasan', country: 'India', city: 'Bengaluru', salary: '35000' },
        { id: '6', Name: 'Dasan', country: 'India', city: 'Bengaluru', salary: '35000' }
    ];
    
}

}
export interface Element {
  name: string;
  weight: number;
  symbol: string;
  position: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Student {
  id:        number;
  rollNo:    number;
  firstName: string;
  lastName:  string;
  marks:     number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
