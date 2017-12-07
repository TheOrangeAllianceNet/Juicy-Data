//orangeFarm by Michael Leonffu

var orangePicker = require('./orangePicker')
var orangePeeler = require('./orangePeeler')
var juicyCalculator = require('./juicyCalculator')
//var orangeStand = require('./orangeStand')


/*
Runs all the peeling scripts with the correct juicyCalculator scripts

Input is the event to take care of (the orange orcherd)

It finds the orangePicker to pick the correct oranges,
then it sends the oranges to the peelers,
the peeled oranges are finally sent to the juicyCalculators to produce juicy data,
which is sold by the orange stand
*/

function orangeFarm(orchard, farmReport){
	//MAYBE ADD A ORCHARD CHECKER HERE!; though manager should know if it exsists or not anyways

	// orchard should be in this form:
	// {
	// 	name: 'abc',
	// 	date: ISODate(), //ISO Date of when it occured; 
	// 	locationID: ObjectId() //ID of the location in the 'places' collection
	// }

	//Ranking; I know this is a nexted callbacks but its really cool looking rn
	orangePicker.orangePickerAverageScores(orchard, function(pickedOranges){
		//orangePeeler.teamOffensiveInfluencePeeler(pickedOranges, function(peeledOranges){
		orangePeeler(pickedOranges, function(peeledOranges){
			console.log(peeledOranges)
			calculatedJuice = juicyCalculator(peeledOranges)
			// orangeStand.somethingThatIsNotDoneYet(orchard, peeledOranges, function(report){
			// 	farmReport(report) //This is done
			// })
			farmReport(calculatedJuice)
		})
	})

	// function pickedOranges(pickedOranges){

	// }

}

var orchard = {
	name: 'Redwood City FTC QT',
	date: '2017-11-04T07:00:00.000Z',
	locationID: 'Lol..' //should be object Id
}

orangeFarm(orchard, function(farmReport){
	console.log(farmReport)
})

module.exports = orangeFarm
// To use in another file:
// var orangeFarm = require('./orangeFarm')
// orangeFarm(orchard, farmReport)
// Where farmReport is the callback function returning a string, if sucsessful or not