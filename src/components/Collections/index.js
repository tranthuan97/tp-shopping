import React from 'react';
import PropTypes from 'prop-types';
import './collectionStyles.scss';

const Collections = ({ style, className }) => {
  return (
    <div className={`${className} d-flex flex-column flex-md-row`} style={style}>
      <div className="item1-collection-cover d-flex col-md-6 col-12 mb-3" style={{ position: 'relative', cursor: 'pointer' }}>
        <img
          className="item1-collection"
          style={{ width: '100%', height:'100%' }}
          src={require('assets/image/young-beautiful-woman-looking-trendy-girl-casual-summer-clothes-positive-funny-model-winking_1080x.jpg').default}
          alt="women" />
        <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, boxShadow: '1px 1px gray', background: 'white', width: 80, height: 40, position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
          Women
        </div>
      </div>
      <div className="d-flex col-md-6 col-12 px-0 mb-3">
        <div className="d-flex flex-column col-md-6">
          <div className="item2-collection-cover flex-1 mb-4" style={{ position: 'relative', cursor: 'pointer' }}>
            <img
              className="item2-collection"
              style={{ height: '100%' }}
              src={require('assets/image/bag2_540x.jpg').default}
              alt="acessories" />
            <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, boxShadow: '1px 1px gray', background: 'white', paddingInline: 10, height: 40, position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
              Accessories
            </div>
          </div>
          <div className="item3-collection-cover flex-1" style={{ position: 'relative', cursor: 'pointer' }}>
            <img
              className="item3-collection"
              style={{ height: '100%', width: '100%' }}
              src={require('assets/image/lemai3020112688_m4_2-0_540x.jpg').default}
              alt="acessories" />
            <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, boxShadow: '1px 1px gray', background: 'white', width: 80, height: 40, position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
              Footwear
            </div>
          </div>
        </div>
        <div className="item4-collection-cover col-6" style={{ position: 'relative', cursor: 'pointer' }}>
          <img
            className="item4-collection"
            style={{ height: '100%', width: '100%' }}
            src={require('assets/image/p24-21_540x.jpg').default}
            alt="acessories" />
          <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, boxShadow: '1px 1px gray', background: 'white', width: 80, height: 40, position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
            Watches
          </div>
        </div>
      </div>
    </div>
  );
};

Collections.propTypes = {
  style: PropTypes.object,
  className: PropTypes.any
};

export default Collections;