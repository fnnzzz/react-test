import React from 'react';
import BannerInfo from '../../components/BannerInfo';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div class="page-header">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							
							<br />
							<h1>About page</h1>
							<br />
							<BannerInfo title="ReactJS" descr="Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project. React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding."/>
						</div>
					</div>
				</div>
			</div>	
		);
	}
}
