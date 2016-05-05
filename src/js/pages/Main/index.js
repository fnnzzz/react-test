import React from 'react';
import BannerInfo from '../../components/BannerInfo';
import ItemsList from '../../components/Items/ItemsList';
import Nav from '../../components/Nav';


export default class MainPage extends React.Component {
	render() {
		return (
			<div class="page-header">
				<div>
					<Nav />
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<BannerInfo />
						</div>

						<div class="col-lg-12">
							<div class="page-header">
								<h1 id="tables">Products</h1>
							</div>
							
							<div class="bs-component">
								<ItemsList />
							</div>
						</div>
					</div>
				</div>
			</div>	
		);
	}
}