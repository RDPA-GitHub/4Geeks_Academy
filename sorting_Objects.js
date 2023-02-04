// 4Geeks Example Sorting Objects

var car = [
  {TYPE: "Volvo", Year: 2016},
  {TYPE: "Saab", Year: 2001},
  {TYPE: "BMW", Year: 2010}
];

  car.sort(function(a,b){return a.Year - b.Year});

  console.log(car);