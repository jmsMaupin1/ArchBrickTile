import React, { Component } from 'react';

import NKBA from '../../assets/NKBA.png';
import ASID from '../../assets/ASID.png';
import BAGI from '../../assets/BAGI.png';
import CSI from '../../assets/CSI.png';
import WBE from '../../assets/WBE.png';
import FCOC from '../../assets/fcoc.png';

export default class Certifications extends Component {
	render() {
		return (
			<div className='col-lg-6 text-center' style={{
				paddingTop: 150,
			}}>
				<div className='col-lg-4 col-sm-6 col-xs-6' style={{paddingTop: 50}}>
					<img src={NKBA} className='center-block img-responsive' alt=''/>
				</div>

				<div className='col-lg-4 col-sm-6 col-xs-6' style={{paddingTop: 50}}>
					<img src={ASID} className='center-block img-responsive' alt=''/>
				</div>

				<div className='col-lg-4 col-sm-6 col-xs-6' style={{paddingTop: 50}}>
					<img src={BAGI} className='center-block img-responsive' alt=''/>
				</div>

				<div className='col-lg-4 col-sm-6 col-xs-6' style={{paddingTop: 50}}>
					<img src={CSI} className='center-block img-responsive' alt=''/>
				</div>

				<div className='col-lg-4 col-sm-6 col-xs-6' style={{paddingTop: 50}}>
					<img src={WBE} className='center-block img-responsive' alt=''/>
				</div>

				<div className='col-lg-4 col-sm-6 col-xs-6' style={{paddingTop: 50}}>
					<img src={FCOC} className='center-block img-responsive' alt=''/>
				</div>


			</div>
		);
	}
}
