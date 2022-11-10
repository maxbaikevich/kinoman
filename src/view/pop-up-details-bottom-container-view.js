export const createPopUpDetailsBottomContainerTemplate = (commentsLength) => (
  `<div class="film-details__bottom-container">
    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsLength}</span></h3>
    </section>
  </div>`
);
