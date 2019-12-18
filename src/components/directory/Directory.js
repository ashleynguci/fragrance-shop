import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import FragranceItem from '../fragrance-item/FragranceItem';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <FragranceItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);