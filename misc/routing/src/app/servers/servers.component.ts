import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadPage() {
    // we don't get an error without the relativeTo argument
    // navigate method doesn't know what the current path is
    // we have to pass an argument to tell it this
    this.router.navigate(['/servers'], {relativeTo: this.route});
  }

}
