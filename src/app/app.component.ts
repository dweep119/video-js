import { Component, ViewChild } from '@angular/core';
//@ts-ignore
require('@silvermine/videojs-chromecast')(videojs, { preloadWebComponents: true });

declare var videojs : any ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-js';

  @ViewChild('channelvideoTemplate') public channelvideoTemplate: any;

  public player: any;

 constructor() { }

 ngOnInit(): void {
   
   var playerElement = document.getElementById("video-player");
   //console.log("channel url", this.streamDetails[0].stream_design.channel_video_btn_url);

   this.player = videojs(playerElement, {
     techOrder: ["chromecast", "html5"],
     autoplay: true,
     muted: false,
     loop: false,
     fluid: true,
     controls: true,
     preload: "auto",
     chromecast: {
     },
     sources: [{
       type: "application/x-mpegURL",
       src: "https://storefreestyle.teleosmedia.com/vod/freestyle/AngieLostGirlsTRAILER2020/playlist.m3u8"
     }],
     plugins: {
       chromecast: {
         receiverAppID: '646E7AC8',
         addButtonToControlBar: true,
       },
      //  airPlay: {
      //    addButtonToControlBar: true,
      //  }
     }
   })
 }

}
