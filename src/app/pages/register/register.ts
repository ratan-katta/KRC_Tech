import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  username = '';
  password = '';
  confirmPassword = '';
  email = '';
  fullName = '';
  errorMessage = '';
  selectedLanguage = 'en';
  @Output() goToLoginEvent = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private router: Router,
    public translationService: TranslationService
  ) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.authService.register(this.username, this.password, this.email, this.fullName)) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Username already exists';
    }
  }

  onLanguageChange() {
    this.translationService.setLanguage(this.selectedLanguage);
  }

  goToLogin() {
    this.goToLoginEvent.emit();
  }
}