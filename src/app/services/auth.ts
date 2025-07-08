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
  private users: User[] = [
    { username: 'admin', password: 'admin', email: 'admin@company.com', fullName: 'Administrator' }
  ];

  constructor() { }

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
