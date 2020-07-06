import React from "react";
import { createStructuredSelector } from "reselect";

import "./collection-overview.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
