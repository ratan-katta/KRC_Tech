import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
  email: string;
  fullName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: User | null = null;
  private users: User[] = [];

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      } else {
        // Default admin user
        this.users = [
          { username: 'admin', password: 'admin', email: 'admin@company.com', fullName: 'Administrator' }
        ];
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    } else {
      // Fallback for SSR: just use in-memory users
      this.users = [
        { username: 'admin', password: 'admin', email: 'admin@company.com', fullName: 'Administrator' }
      ];
    }
  }

  login(username: string, password: string): boolean {
    console.log('AuthService login called with:', username, password);
    console.log('Available users:', this.users);
    const user = this.users.find(u => u.username === username && u.password === password);
    console.log('Found user:', user);
    if (user) {
      this.isLoggedIn = true;
      this.currentUser = user;
      console.log('Login successful');
      return true;
    }
    console.log('Login failed - no matching user');
    return false;
  }

  register(username: string, password: string, email: string, fullName: string): boolean {
    console.log('Register attempt:', username, email, fullName);
    const existingUser = this.users.find(u => u.username === username);
    if (existingUser) {
      console.log('Username already exists');
      return false;
    }
    
    this.users.push({ username, password, email, fullName });
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    console.log('User registered successfully. Total users:', this.users.length);
    console.log('All users:', this.users);
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
