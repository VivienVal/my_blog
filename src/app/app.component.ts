import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  posts = [
  new Post('Mon premier post', 'In his tractibus navigerum nusquam visitur flumen sed in locis plurimis aquae suapte natura calentes emergunt ad usus aptae multiplicium medelarum. verum has quoque regiones pari sorte Pompeius Iudaeis domitis et Hierosolymis captis in provinciae speciem delata iuris dictione formavit.'),
  new Post('test', 'lorem ipsum blablabla');
  ];
}

class Post {
	title: string;
	content: string;
	created_at: Date;
	loveIts: number;

	constructor(m_title, m_content){
		this.title = m_title;
		this.content = m_content;
		this.loveIts = 0;
		this.created_at = new Date();
	}
}
