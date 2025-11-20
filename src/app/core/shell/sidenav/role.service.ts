import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = '/fineract-provider/api/v1';

  constructor(private http: HttpClient) {}

  /** Fetch roles assigned to logged-in user */
  getUserRoles(userId: number): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}/users/${userId}/roles`);
  }

  /** Optionally: fetch all system roles */
  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}/roles`);
  }
}
