import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casd-1718-w1',
  templateUrl: './casd-1718-w1.component.html',
  styleUrls: ['./casd-1718-w1.component.css']
})
export class Casd1718W1Component implements OnInit {

  dtOptions: DataTables.Settings = {};

  data: any;
  constructor() { }

  ngOnInit() {

    this.dtOptions = {
      paging: false
    };

    this.data = [ { rank: 5,
      teamNumber: 12765,
      teamName: 'Electric Dragons',
      record: { win: 5, losses: 0, ties: 0 },
      qualifyingPoints: 10,
      rankingPoints: 189,
      averageScore: 108.149,
      averageMarginalScore: 114.694 },
    { rank: 3,
      teamNumber: 4262,
      teamName: 'Ridgebots',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 332,
      averageScore: 122.558,
      averageMarginalScore: 70.829 },
    { rank: 15,
      teamNumber: 11656,
      teamName: 'iKickBots',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 302,
      averageScore: 52.332,
      averageMarginalScore: -1.239 },
    { rank: 6,
      teamNumber: 11350,
      teamName: 'Sloth Slowbotics',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 297,
      averageScore: 100.874,
      averageMarginalScore: 78.26 },
    { rank: 9,
      teamNumber: 3848,
      teamName: 'Shockwave',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 284,
      averageScore: 72.967,
      averageMarginalScore: 23.17 },
    { rank: 10,
      teamNumber: 9266,
      teamName: 'Pyrobots',
      record: { win: 3, losses: 2, ties: 0 },
      qualifyingPoints: 6,
      rankingPoints: 307,
      averageScore: 67.982,
      averageMarginalScore: 20.786 },
    { rank: 52,
      teamNumber: 10390,
      teamName: 'STEM Scouts At-Large',
      record: { win: 3, losses: 2, ties: 0 },
      qualifyingPoints: 6,
      rankingPoints: 166,
      averageScore: -16.328,
      averageMarginalScore: -78.469 },
    { rank: 30,
      teamNumber: 10809,
      teamName: 'Crow Force 5',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 277,
      averageScore: 28.184,
      averageMarginalScore: -7.261 },
    { rank: 29,
      teamNumber: 8097,
      teamName: 'Botcats',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 225,
      averageScore: 28.801,
      averageMarginalScore: -18.132 },
    { rank: 32,
      teamNumber: 10793,
      teamName: 'Voltrons',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 181,
      averageScore: 23.899,
      averageMarginalScore: 6.748 },
    { rank: 8,
      teamNumber: 9261,
      teamName: 'Level Up',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 424,
      averageScore: 77.248,
      averageMarginalScore: -5.79 },
    { rank: 27,
      teamNumber: 5135,
      teamName: 'Team Uncopyrightable',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 324,
      averageScore: 30.402,
      averageMarginalScore: -27.853 },
    { rank: 31,
      teamNumber: 11285,
      teamName: 'PATENT PENDING',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 233,
      averageScore: 25.832,
      averageMarginalScore: -22.264 },
    { rank: 45,
      teamNumber: 10092,
      teamName: 'Green.Griffins',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 229,
      averageScore: 3.03,
      averageMarginalScore: -73.216 },
    { rank: 51,
      teamNumber: 5131,
      teamName: 'Pointers',
      record: { win: 0, losses: 5, ties: 0 },
      qualifyingPoints: 0,
      rankingPoints: 200,
      averageScore: -15.99,
      averageMarginalScore: -72.432 },
    { rank: 14,
      teamNumber: 11128,
      teamName: 'Inspiration',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 182,
      averageScore: 56.376,
      averageMarginalScore: 44.36 },
    { rank: 18,
      teamNumber: 12073,
      teamName: 'The Trisectors',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 174,
      averageScore: 43.838,
      averageMarginalScore: 17.892 },
    { rank: 13,
      teamNumber: 9441,
      teamName: 'Syndicate',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 155,
      averageScore: 56.453,
      averageMarginalScore: 39.513 },
    { rank: 12,
      teamNumber: 12666,
      teamName: 'D39 RetroRobots',
      record: { win: 3, losses: 2, ties: 0 },
      qualifyingPoints: 6,
      rankingPoints: 225,
      averageScore: 60.929,
      averageMarginalScore: 56.249 },
    { rank: 36,
      teamNumber: 5540,
      teamName: 'Skynet',
      record: { win: 3, losses: 2, ties: 0 },
      qualifyingPoints: 6,
      rankingPoints: 192,
      averageScore: 21.256,
      averageMarginalScore: -23.666 },
    { rank: 20,
      teamNumber: 4278,
      teamName: 'De.Evolution',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 211,
      averageScore: 41.76,
      averageMarginalScore: -19.148 },
    { rank: 40,
      teamNumber: 6003,
      teamName: 'SFC Techno Eagles',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 167,
      averageScore: 15.428,
      averageMarginalScore: -40.643 },
    { rank: 28,
      teamNumber: 9837,
      teamName: 'Ravenettes',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 164,
      averageScore: 28.838,
      averageMarginalScore: -7.508 },
    { rank: 38,
      teamNumber: 7159,
      teamName: 'Robo Ravens',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 192,
      averageScore: 16.795,
      averageMarginalScore: -24.544 },
    { rank: 44,
      teamNumber: 13184,
      teamName: 'Radiating Robots',
      record: { win: 0, losses: 5, ties: 0 },
      qualifyingPoints: 0,
      rankingPoints: 182,
      averageScore: 5.166,
      averageMarginalScore: -43.25 },
    { rank: 2,
      teamNumber: 8606,
      teamName: 'RSF Intergalactic Dragons',
      record: { win: 5, losses: 0, ties: 0 },
      qualifyingPoints: 10,
      rankingPoints: 222,
      averageScore: 157.791,
      averageMarginalScore: 132.801 },
    { rank: 16,
      teamNumber: 9892,
      teamName: 'EngiNERDs',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 240,
      averageScore: 50.766,
      averageMarginalScore: 15.021 },
    { rank: 43,
      teamNumber: 12605,
      teamName: 'RSF Virtual Vipers',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 156,
      averageScore: 6.853,
      averageMarginalScore: 2.983 },
    { rank: 17,
      teamNumber: 13224,
      teamName: 'Face The Challenge',
      record: { win: 3, losses: 1, ties: 1 },
      qualifyingPoints: 7,
      rankingPoints: 280,
      averageScore: 44.628,
      averageMarginalScore: 23.344 },
    { rank: 21,
      teamNumber: 8605,
      teamName: 'RSF Logitechies',
      record: { win: 3, losses: 1, ties: 1 },
      qualifyingPoints: 7,
      rankingPoints: 224,
      averageScore: 37.413,
      averageMarginalScore: -7.923 },
    { rank: 41,
      teamNumber: 5015,
      teamName: 'Buffalo Wings',
      record: { win: 3, losses: 2, ties: 0 },
      qualifyingPoints: 6,
      rankingPoints: 174,
      averageScore: 13.865,
      averageMarginalScore: 11.847 },
    { rank: 49,
      teamNumber: 9049,
      teamName: 'RoboPuffs',
      record: { win: 3, losses: 2, ties: 0 },
      qualifyingPoints: 6,
      rankingPoints: 160,
      averageScore: -8.361,
      averageMarginalScore: -30.609 },
    { rank: 24,
      teamNumber: 7696,
      teamName: 'RSF Singularity',
      record: { win: 3, losses: 2, ties: 0 },
      qualifyingPoints: 6,
      rankingPoints: 138,
      averageScore: 35.238,
      averageMarginalScore: -7.652 },
    { rank: 26,
      teamNumber: 9164,
      teamName: 'Zorrobots',
      record: { win: 2, losses: 2, ties: 1 },
      qualifyingPoints: 5,
      rankingPoints: 216,
      averageScore: 32.346,
      averageMarginalScore: 13.509 },
    { rank: 25,
      teamNumber: 13891,
      teamName: 'Serendipity',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 186,
      averageScore: 33.431,
      averageMarginalScore: -24.794 },
    { rank: 34,
      teamNumber: 13383,
      teamName: 'Nazareth Eagles 2.0',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 156,
      averageScore: 23.103,
      averageMarginalScore: -11.289 },
    { rank: 46,
      teamNumber: 12748,
      teamName: 'B1nary Drag0ns',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 132,
      averageScore: 1.868,
      averageMarginalScore: 4.429 },
    { rank: 47,
      teamNumber: 11411,
      teamName: 'Cherry Pi',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 112,
      averageScore: 1.42,
      averageMarginalScore: -50.195 },
    { rank: 35,
      teamNumber: 6226,
      teamName: 'Bambusa',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 86,
      averageScore: 21.586,
      averageMarginalScore: -12.935 },
    { rank: 37,
      teamNumber: 13185,
      teamName: 'Battle Sheep',
      record: { win: 0, losses: 4, ties: 1 },
      qualifyingPoints: 1,
      rankingPoints: 204,
      averageScore: 21.127,
      averageMarginalScore: -63.205 },
    { rank: 4,
      teamNumber: 12500,
      teamName: 'Gear Up',
      record: { win: 5, losses: 0, ties: 0 },
      qualifyingPoints: 10,
      rankingPoints: 347,
      averageScore: 108.436,
      averageMarginalScore: 100.576 },
    { rank: 1,
      teamNumber: 4216,
      teamName: 'Rise of Hephaestus',
      record: { win: 5, losses: 0, ties: 0 },
      qualifyingPoints: 10,
      rankingPoints: 262,
      averageScore: 204.389,
      averageMarginalScore: 213.55 },
    { rank: 11,
      teamNumber: 9367,
      teamName: 'Torrey Techies White',
      record: { win: 4, losses: 1, ties: 0 },
      qualifyingPoints: 8,
      rankingPoints: 336,
      averageScore: 62.639,
      averageMarginalScore: 29.5 },
    { rank: 39,
      teamNumber: 8380,
      teamName: 'UC Robotics',
      record: { win: 3, losses: 2, ties: 0 },
      qualifyingPoints: 6,
      rankingPoints: 190,
      averageScore: 16.287,
      averageMarginalScore: -36.543 },
    { rank: 33,
      teamNumber: 8742,
      teamName: 'RoboTechs',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 388,
      averageScore: 23.602,
      averageMarginalScore: -75.41 },
    { rank: 22,
      teamNumber: 3650,
      teamName: 'Torrey Techies',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 365,
      averageScore: 37.289,
      averageMarginalScore: -19.639 },
    { rank: 7,
      teamNumber: 11212,
      teamName: 'The Clueless',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 356,
      averageScore: 90.09,
      averageMarginalScore: 41.42 },
    { rank: 42,
      teamNumber: 11938,
      teamName: 'GPA Eagles Robotics Team',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 275,
      averageScore: 9.171,
      averageMarginalScore: -81.482 },
    { rank: 19,
      teamNumber: 11288,
      teamName: 'Seminerds',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 248,
      averageScore: 42.583,
      averageMarginalScore: 42.216 },
    { rank: 50,
      teamNumber: 6074,
      teamName: 'RAWALA',
      record: { win: 2, losses: 3, ties: 0 },
      qualifyingPoints: 4,
      rankingPoints: 230,
      averageScore: -9.565,
      averageMarginalScore: -83.718 },
    { rank: 48,
      teamNumber: 8906,
      teamName: 'ROARbots',
      record: { win: 1, losses: 4, ties: 0 },
      qualifyingPoints: 2,
      rankingPoints: 164,
      averageScore: -8.253,
      averageMarginalScore: -84.261 },
    { rank: 23,
      teamNumber: 12823,
      teamName: 'Crescendo',
      record: { win: 0, losses: 5, ties: 0 },
      qualifyingPoints: 0,
      rankingPoints: 259,
      averageScore: 36.132,
      averageMarginalScore: -46.211 } ];
  }

}