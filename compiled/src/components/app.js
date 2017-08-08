"use strict";

var App = function App(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Movie List"
    ),
    React.createElement(
      "p",
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          props.movies.map(function (movie) {
            return movie.title;
          })
        )
      )
    )
  );
};

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsInRpdGxlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxLQUFEO0FBQUEsU0FDUjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0EsZ0JBQU1DLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixpQkFBUztBQUMzQixtQkFBT0MsTUFBTUMsS0FBYjtBQUNELFdBRkU7QUFBTDtBQURGO0FBREY7QUFGRixHQURRO0FBQUEsQ0FBVjs7QUFhQUMsT0FBT04sR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBcHAgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgPHA+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT57cHJvcHMubW92aWVzLm1hcChtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUudGl0bGU7XG4gICAgICAgICAgfSl9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9wPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=