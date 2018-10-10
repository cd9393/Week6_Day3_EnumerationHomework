const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
return this.journeys.map(journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter(journey => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
return this.journeys.reduce((totalDistance,journey) => {
  return totalDistance += journey.distance;
},0)
};

Array.prototype.unique = function() {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
} // indexOf returns the index of the first occurence of an element.
//the filter function creates a new array of all elements which return a value of true so only the items which are the first occurence will be added to the new array getting rid of duplicates.

Traveller.prototype.getUniqueModesOfTransport = function () {
const transports = this.getModesOfTransport();
return transports.unique()
};


module.exports = Traveller;
