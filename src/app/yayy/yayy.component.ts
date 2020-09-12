import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yayy',
  templateUrl: './yayy.component.html',
  styleUrls: ['./yayy.component.css']
})
export class YayyComponent implements OnInit {

  constructor() { }
  yayyArray = ["Subject Matter Expert at PESU IO - Taught Introduction to Artificial Neural Networks Course to first year students of batch 2017-2021 and 2018-2022 and providing resources, guiding and assisting them throughout the course.", " Co-head of Web Development Domain at Microsoft Student Club worked as a team in Building backend for websites using different technologies.","Finalist at International Women’s Hackathon (10000+ submissions) conducted in association with HackerEarth.", "Solved 200+ questions on leetcode.", "Recipient of CNR Rao Merit Scolarship - Awarded for being part of the Top 20% in the Computer Science Engineering Department in PES University."]
  ngOnInit(): void {
  }

}
