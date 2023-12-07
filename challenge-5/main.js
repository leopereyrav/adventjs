function cyberReindeer(road, time) {
  let movements = [road];
  let n = 0;
  let sign = ".";

  for (let i = 1; i < time; i++) {
    if (i == 5) road = road.replace(/\|/g, "*");
    const newRoad = road.replace(/S[\.\*]/, `${sign}S`);
    if (newRoad != road) {
      n++;
      sign = road[n];
    }
    road = newRoad;
    movements.push(road);
  }

  return movements;
}

const road = 'S..|...|..'
const time = 10
const result = cyberReindeer(road, time)
console.log(result)