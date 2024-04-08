import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
 descdescription = `\tZigla will power digital innovation across the agricultural community and enhance the lives of farmers globally. An industry-specific protocol for agriculture and allied sectors, it divides the agricultural value chain into modules and enables stakeholders to participate partially or entirely across the value chain. Zigla will empower all the stakeholders to scale their businesses, reach new partners, and trade agricultural commodities on their own terms.\n 
 /\s\s+/gThe future of agriculture is going to be decentralised and democratised. We are building a cohort of solutions powered by web3 customised for the agricultural sector.`
  ngOnInit(): void {
  }

}
