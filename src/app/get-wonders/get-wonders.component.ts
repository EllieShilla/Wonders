import { Component, OnInit } from '@angular/core';
import { Wonder } from '../wonder';
import { WondersService } from '../WondersService.service';

@Component({
  selector: 'app-get-wonders',
  templateUrl: './get-wonders.component.html',
  styleUrls: ['./get-wonders.component.css'],
  providers:[WondersService]
})
export class GetWondersComponent implements OnInit {

  
  Wonders:Wonder[]=[];

  constructor(private wonderServ:WondersService) { }

  ngOnInit(): void {
this.Wonders=this.wonderServ.getWonder();
  }

}
