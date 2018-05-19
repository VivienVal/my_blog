export class Post {
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