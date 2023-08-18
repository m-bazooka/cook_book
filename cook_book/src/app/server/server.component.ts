import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent {
    serverName = 'BMW';
    serverStatus = 'offline';
    fontColor = 'white';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColour() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}