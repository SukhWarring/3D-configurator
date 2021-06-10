import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-dobjects',
  templateUrl: './three-dobjects.component.html',
  styleUrls: ['./three-dobjects.component.css']
})
export class ThreeDObjectsComponent implements OnInit {
allObjectList : Array<any> = []
  constructor() { }

  ngOnInit(): void {
  }


  getAllObjects()
  {
    
  }

  getObjectById(id: number)
  {
    
  }
  updateObjectColor(id: number)
  {
    
  }

  delete(id: number)
  {
    
  }

}
