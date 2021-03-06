import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

export interface ServerInfo {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<ServerInfo> {
  constructor(private serversService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerInfo> | Promise<ServerInfo> | ServerInfo {
    return this.serversService.getServer(+route.params['id']);
  }
}
