import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';
  selectedLanguage = 'en';

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
    console.log('Navigating to register page');
    this.router.navigate(['/register']);
  }
}
