import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', email: 'john@company.com', department: 'IT', position: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@company.com', department: 'HR', position: 'Manager' },
    { id: 3, name: 'Mike Johnson', email: 'mike@company.com', department: 'Finance', position: 'Analyst' }
  ];
  private idCounter = 4;

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  addEmployee(employee: Employee): void {
    employee.id = this.idCounter++;
    this.employees.push(employee);
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index > -1) this.employees[index] = updatedEmployee;
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}