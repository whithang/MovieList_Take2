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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllSXRlbXMuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwibW92aWVzIiwibWFwIiwibW92aWUiLCJ0aXRsZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLGdCQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsaUJBQVM7QUFDM0IsbUJBQU9DLE1BQU1DLEtBQWI7QUFDRCxXQUZFO0FBQUw7QUFERjtBQURGO0FBRkYsR0FEUTtBQUFBLENBQVY7O0FBYUFDLE9BQU9OLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJNb3ZpZUl0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFwcCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICA8cD5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPntwcm9wcy5tb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZTtcbiAgICAgICAgICB9KX08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3A+XG4gIDwvZGl2PlxuKTtcblxud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==