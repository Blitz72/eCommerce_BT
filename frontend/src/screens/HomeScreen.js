import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'

const HomeScreen = () => {
	return (
		<>
			<h3>Latest Products (well, all of them, actually ;) )</h3>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<h4 className='py-3'>{product.name}</h4>
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomeScreen
