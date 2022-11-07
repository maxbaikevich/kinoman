import dayjs from 'dayjs';
import {timeStempDuration} from '../utils';
const LENGTH_DESCRIPTION = 140;
export const createFilmCardTemplate = (movieData) => {
  const  {title, poster,totalRating, runtime, description, genre} = movieData.filmInfo;
  const  {alreadyWatched, favorite, watchlist} = movieData.userDetails;
  const duration = timeStempDuration(runtime);
  const descriptionFormat = (descriptionText) => (
    descriptionText.length > LENGTH_DESCRIPTION ? `${descriptionText.substring(0, 140)}...` : descriptionText
  );
  return`<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${dayjs(movieData.filmInfo.release.date).format('YYYY')}</span>
        <span class="film-card__duration">${duration.hours}h ${duration.minutes}m</span>
        <span class="film-card__genre">${genre[0]}</span>
      </p>
      <img src=${poster} alt="" class="film-card__poster">
      <p class="film-card__description">${descriptionFormat(description)}</p>
      <span class="film-card__comments">${movieData.comments.length} comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlist ? 'film-card__controls-item--active' : ''}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatched ? 'film-card__controls-item--active' : ''}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${favorite ? 'film-card__controls-item--active' : ''}"" type="button">Mark as favorite</button>
    </div>
  </article>`;
};
