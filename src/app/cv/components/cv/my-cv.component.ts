import { Component, OnInit } from '@angular/core';
import { CvDTO, ExperienceDTO, InterestDTO, LanguageDTO, SkillsDTO, TasksDTO } from '../../interfaces/cv-dto';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss']
})
export class MyCvComponent implements OnInit {

  myCv: CvDTO;
  
  constructor(public service: CvService) {
  }

  ngOnInit(): void {
    this.getMyCv();
  }

  getMyCv() {
    this.service.getCV().subscribe(
      res => {
        if (res != null) {
          this.myCv = res;
        }
      }
    );
  }

  trackLanguageByLabel(index: number, item: LanguageDTO) {
    return item?.label;
  }

  trackExperieceByTitle(index: number, item: ExperienceDTO) {
    return item?.title;
  }

  trackTaskByLabel(index: number, item: TasksDTO) {
    return item?.label;
  }

  trackLanguagesByLabel(index: number, item: LanguageDTO) {
    return item?.label;
  }

  trackSkillsByLabel(index: number, item: SkillsDTO) {
    return item?.label;
  }

  trackInterestByLabel(index: number, item: InterestDTO) {
    return item?.label;
  }




}
