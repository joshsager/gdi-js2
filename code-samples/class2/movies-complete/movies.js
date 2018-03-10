var data = { movies: [
            {
              'title':'Back To The Future',
              'director':'Robert Zemeckis',
              'year':'1985'
            },{
              'title':'Hidden Figures',
              'director':'Theodore Melfi',
              'year':'2016'
            },{
              'title':'Office Space',
              'director':'Mike Judge',
              'year':'1999'
            },{
              'title':'Apollo 13',
              'director':'Ron Howard',
              'year':'1995'
            },{
              'title':'Pitch Perfect 2',
              'director':'Elizabeth Banks',
              'year':'2015'
            },
          ]
        }

for (var i =0; i<data.movies.length; i++){
  console.log("title: " + data.movies[i].title);
  console.log("director: " + data.movies[i].director);
  console.log("year: " + data.movies[i].year);
}
