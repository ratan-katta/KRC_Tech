import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { TranslationService } from '../../services/translation';
import { Register } from '../register/register';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Register],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';
  selectedLanguage = 'en';
  currentTheme = 'light';
  showPassword = false;
  showRegister = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    public translationService: TranslationService
  ) {}

  onSubmit(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    console.log('Login attempt:', this.username, this.password);
    if (this.authService.login(this.username, this.password)) {
      console.log('Login successful, navigating to dashboard');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Login failed');
      this.errorMessage = 'Invalid username or password';
    }
  }

  onLanguageChange() {
    this.translationService.setLanguage(this.selectedLanguage);
  }

  goToRegister() {
    this.showRegister = true;
  }
  goToLogin() {
    this.showRegister = false;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme');
  }
}
