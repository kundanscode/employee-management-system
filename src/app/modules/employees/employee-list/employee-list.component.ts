import { Component } from '@angular/core';
import { authenticationApi } from '../../../core/helper/constants';
import { HttpClient } from '@angular/common/http';
import { MaterialImportsModule } from '../../../material-imports.module';
import { Employee } from '../../../core/models/employees.model';
import { MatTableDataSource } from '@angular/material/table';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-employee-list',
  imports: [MaterialImportsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  private apiUrl = authenticationApi.getAllEmployee;
  empList: Employee[] = [];
  dataSource!: MatTableDataSource<Employee>;

  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'department',
    'doj',
    'employee_code',
    'location',
    'mobile',
  ];

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      console.log(data); // for debugging purposes
      this.empList = data;
      console.log('emplist => ', this.empList);

      this.dataSource = new MatTableDataSource(this.empList);
    });
  }
}
