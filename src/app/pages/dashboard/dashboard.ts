import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee';
import { AuthService } from '../../services/auth';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  employees: Employee[] = [];
  showEmployeeForm = false;
  editingEmployee: Employee | null = null;
  activeRoute = 'overview';
  
  newEmployee: Employee = { id: 0, name: '', email: '', department: '', position: '' };
  
  // Analytics data
  departmentStats: any[] = [];
  positionStats: any[] = [];
  totalEmployees = 0;
  
  selectedLanguage = 'en';
  currentUser: any = null;
  
  menuItems = [
    { id: 'overview', label: 'overview', icon: '📊' },
    { id: 'employees', label: 'employees', icon: '👥' },
    { id: 'departments', label: 'departments', icon: '🏢' },
    { id: 'reports', label: 'reports', icon: '📈' },
    { id: 'profile', label: 'profile', icon: '👤' },
    { id: 'settings', label: 'settings', icon: '⚙️' }
  ];

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router,
    public translationService: TranslationService
  ) {
    this.selectedLanguage = this.translationService.getCurrentLanguage();
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    console.log('Dashboard ngOnInit currentUser:', this.currentUser);
    this.loadData();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateTo(route: string) {
    this.activeRoute = route;
  }

  onLanguageChange() {
    this.translationService.setLanguage(this.selectedLanguage);
  }

  loadData() {
    this.employees = this.employeeService.getEmployees();
    this.totalEmployees = this.employees.length;
    this.calculateAnalytics();
  }

  calculateAnalytics() {
    // Department statistics
    const deptCount: {[key: string]: number} = {};
    this.employees.forEach(emp => {
      deptCount[emp.department] = (deptCount[emp.department] || 0) + 1;
    });
    this.departmentStats = Object.entries(deptCount).map(([dept, count]) => ({dept, count}));

    // Position statistics
    const posCount: {[key: string]: number} = {};
    this.employees.forEach(emp => {
      posCount[emp.position] = (posCount[emp.position] || 0) + 1;
    });
    this.positionStats = Object.entries(posCount).map(([position, count]) => ({position, count}));
  }

  // Employee CRUD
  addEmployee() {
    if (this.editingEmployee) {
      this.employeeService.updateEmployee(this.newEmployee);
      this.editingEmployee = null;
    } else {
      this.employeeService.addEmployee({...this.newEmployee});
    }
    this.resetEmployeeForm();
    this.loadData();
  }

  editEmployee(employee: Employee) {
    this.newEmployee = {...employee};
    this.editingEmployee = employee;
    this.showEmployeeForm = true;
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
    this.loadData();
  }

  resetEmployeeForm() {
    this.newEmployee = { id: 0, name: '', email: '', department: '', position: '' };
    this.showEmployeeForm = false;
    this.editingEmployee = null;
  }


}
