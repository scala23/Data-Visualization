let table;

function preload() {
  table = loadTable("flights.csv","csv","header")
}
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  noStroke();
  fill(0,0,255,10);

  background(255,255,255)
  let rows = table.getRows()
  for (let r = 0; r < rows.length; r++) {
    let from_long = rows[r].getNum("from_long");
    let from_lat = rows[r].getNum("from_lat");
    let from_country = rows[r].getString("from_country");
    let to_country = rows[r].getString("to_country");
    let distance = rows[r].getNum("distance");

    let x = map(from_long,-180,180,0,width);
    let y = map(from_lat,-90,90,height,0);
    if ( from_country == to_country ) {
      fill('blue');
    } else {
      fill('red');
    }
    let radius = map(distance,1,15406,3,15);
    ellipse(x,y,radius,radius);
  }
}



//Created using inspiration from a website called virtual analysis lab. Some pieces of code were from that website.