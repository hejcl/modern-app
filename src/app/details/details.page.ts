import {Component, inject, Input, signal, WritableSignal} from "@angular/core";
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {MovieService} from "../services/movie.service";
import {MovieResult} from "../services/interfaces";
import {addIcons} from "ionicons";
import {calendarOutline, cashOutline} from "ionicons/icons";


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonItem,
    CurrencyPipe,
    DatePipe, IonContent],
})
export class DetailsPage {
private movieService = inject(MovieService);
public imageBaseUrl = 'https://image.tmdb.org/t/p';
public movie: WritableSignal<MovieResult | null> = signal(null);


@Input()
  set id(movieId: string) {
  this.movieService.getMovieDetails(movieId).subscribe((movie) => {

this.movie.set(movie);
  });
}
  constructor() {
  addIcons({cashOutline, calendarOutline});
  }
}
