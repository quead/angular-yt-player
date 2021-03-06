import { Component, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';
import { SharedService } from './services/shared.service';
import { NotifyService } from './services/notify.service';
import { GlobalsService } from './services/globals.service';
import { PlaylistControlService } from './services/playlist-control.service';

@Component({
	selector: 'app-yt',
	templateUrl: 'app.component.html',
	providers: [PlaylistControlService]
})
export class AppComponent implements OnInit {
	@ViewChild('videoItemIDvalue', { static: true }) videoItemIDvalue: ElementRef;
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
		const max = document.documentElement.scrollHeight;
		if (pos === max) {
			console.log('End of page');
			// To check if is on homepage and implement virtual scroll
			// this.shared.initFeed('', this.globals.nextPageToken)
		}
	}

	constructor(
		public shared: SharedService,
		public globals: GlobalsService,
		public playlistCTRL: PlaylistControlService,
		public notify: NotifyService
	) { }

	ngOnInit() {
		this.globals.videoItemIDvalue = this.videoItemIDvalue;
	}
}
