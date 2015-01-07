// http://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
var featureCollection = require('turf-featurecollection');

/**
 * Selects a given number of {@link Feature|features} from a {@link FeatureCollection}
 * at random.
 *
 * @module turf/sample
 * @param {FeatureCollection} features
 * @param {number} n number of features to select
 * @return {FeatureCollection} output
 * @example
 * var pts = JSON.parse(fs.readFileSync('/path/to/pts.geojson'))
 * var num = 10
 * var sampled = turf.sample(pts, num)
 * console.log(sampled)
 */
module.exports = function(fc, num){
  var outFC = featureCollection(getRandomSubarray(fc.features, num));
  return outFC;
}

function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
