import { Component } from '@angular/core';
import { DetectingTextService } from './shared/detecting-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public text = ` Elon Musk is a renowned entrepreneur, innovator and visionary who has significantly contributed to the fields of technology and sustainability. He is best known for his companies Tesla, SpaceX and SolarCity which have revolutionized the industries they operate in. This essay will discuss Elon Musk's key achievements, with a focus on his contributions to technology and sustainability.

  One of Elon Musk's most notable contributions to the field of technology is his work with SpaceX. He founded the company in 2002 with the goal of reducing space transportation costs and making human life multi-planetary. SpaceX has since developed reusable rockets, thereby drastically reducing the cost of space travel and setting new standards for rocket launches. Additionally, it has successfully launched and landed numerous rockets, including the Falcon Heavy, which is currently the world's most powerful rocket. SpaceX has also developed the Dragon spacecraft, which has been used for cargo resupply to the International Space Station. This technology has revolutionized space exploration and expanded our understanding of what’s possible in space.
  
  Elon Musk's other notable contribution to technology is his work with Tesla. He joined the company in 2004 and has since transformed it from a small electric car start-up to a global leader in sustainable transportation. Under his leadership, Tesla has developed numerous electric vehicles that have set new standards for performance, range and safety. The company's flagship Model S sedan was named the best car of the year by Motor Trend magazine in 2012, while its Model X SUV was awarded five stars by the National Highway Traffic Safety Administration for crash safety.
  
  Tesla's most significant contribution to sustainability is its role in reducing carbon emissions and promoting clean energy. Electric cars produce no greenhouse gas emissions during operation, thereby improving air quality and reducing our dependence on fossil fuels. Additionally, Tesla has developed home solar products such as rooftop solar panels and battery storage systems that enable households to generate their own electricity using renewable sources.`
  
  constructor(
    private readonly DetectingTextService:DetectingTextService
  ){

  }

  public convertTextToChunks(){

  }

  public detectChucks(){
    const text = ["hi there how are you","I am fine"]
    this.DetectingTextService.detectText(text).subscribe((response:any)=>{
      console.log(response);
    })
  }
}

