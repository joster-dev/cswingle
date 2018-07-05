import { Component, HostListener } from "@angular/core";

@Component({
  selector: "cs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isFullscreen = false;

  people: any[] = [
    new Image("https://i.imgur.com/m3i5PjR.jpg"),
    new Image("https://i.imgur.com/wfr3o0D.jpg"),
    new Image("https://i.imgur.com/zEsciF4.jpg"),
    new Image("https://i.imgur.com/VjHHGqi.jpg"),
    new Image("https://i.imgur.com/9p8QDgL.jpg")
  ];

  clay: Image[] = [
    new Image("https://i.imgur.com/diuNWsH.jpg"),
    new Image("https://i.imgur.com/L5iHsNu.jpg"),
    new Image("https://i.imgur.com/RD1hIwp.jpg"),
    new Image("https://i.imgur.com/opcU9Su.jpg"),
    new Image("https://i.imgur.com/wQg2k43.png")
  ];

  clickImg(image: Image) {
    if (this.isFullscreen === false) {
      setTimeout(() => {
        this.isFullscreen = true;
        image.isFullscreen = true;
      }, 1);
    }
  }

  @HostListener("window:click")
  windowClick() {
    if (this.isFullscreen === true) {
      this.disableFullscreen();
    }
  }

  private disableFullscreen() {
    this.isFullscreen = false;
    this.people = this.people.map(item => {
      item.isFullscreen = false;
      return item;
    });
    this.clay = this.clay.map(item => {
      item.isFullscreen = false;
      return item;
    });
  }
}

class Image {
  isFullscreen = false;
  constructor(private src: string) {}
}
