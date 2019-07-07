import React, { Component } from 'react';
import { SHOP_DATA } from '../../other/Collection';

import PreviewCollection from '../../Components/preview-collection/preview-collection.component';

export default class Shop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<PreviewCollection key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}
