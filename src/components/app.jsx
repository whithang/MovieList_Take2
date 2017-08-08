var App = (props) => (
  <div>
    <h1>Movie List</h1>
    <p>
      <ul>
        <li>{props.movies.map(movie => {
            return movie.title;
          })}</li>
      </ul>
    </p>
  </div>
);

window.App = App;
