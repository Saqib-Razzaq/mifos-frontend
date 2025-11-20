import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface LoginActivity {
  browser: string;
  device: string;
  ip: string;
  location: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginActivitiesService {

  // Example API endpoint (replace later with real Mifos endpoint)
  private readonly apiUrl = '/api/login-activities';

  constructor(private http: HttpClient) {}

  getLoginActivities(): Observable<LoginActivity[]> {
    // 🔸 Replace this mock with `return this.http.get<LoginActivity[]>(this.apiUrl);`
    const mockData: LoginActivity[] = [
      { browser: 'Chrome 122', device: 'Windows 10', ip: '192.168.1.12', location: 'Lahore, PK', time: new Date().toISOString() },
      { browser: 'Safari 17', device: 'iPhone 15', ip: '172.16.0.20', location: 'Karachi, PK', time: new Date(Date.now() - 3600000).toISOString() },
    ];
    return of(mockData);
  }
}
