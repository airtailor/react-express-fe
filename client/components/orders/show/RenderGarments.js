import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { uniqBy } from 'lodash';
import RenderAlterations from './RenderAlterations';
import OrderShowTitle from './OrderShowTitle';

class RenderGarments extends Component {
  getUniqueItemTypes(items) {
    return uniqBy(
      items.map(i => {
        return { type: i.item_type.name, items: [] };
      }),
      'type'
    );
  }

  sortItemsByType() {
    const { items } = this.props.currentOrder;

    if (isEmpty(items)) return [];

    const sortedItems = new Set(this.getUniqueItemTypes(items));

    for (var item of items) {
      const itemType = item.item_type.name;
      const sortedItemsIterator = sortedItems.values();
      let sortingItem = true;

      while (sortingItem) {
        let currentIter = sortedItemsIterator.next();
        let currentValue = currentIter.value;

        if (currentIter.done) {
          sortingItem = false;
        } else if (currentValue.type === itemType) {
          currentValue.items.push(item);
        }
      }
    }

    return [...sortedItems];
  }

  renderOrderItems(item, itemType, index) {
    const itemCaption = `${itemType.type.toUpperCase()} #${index + 1}`;
    const alt = <RenderAlterations garment={item} />;

    if (isEmpty(item.alterations)) {
      return <div />;
    }

    return (
      <div key={index} style={{ marginLeft: '15px' }}>
        <h3 style={{ paddingRight: '15px' }}>
          <OrderShowTitle title={itemCaption} />
        </h3>

        <span className="cart-item">
          <RenderAlterations garment={item} />
        </span>
      </div>
    );
  }

  renderList() {
    return this.sortItemsByType().map((itemType, index) => {
      return itemType.items.map((item, index) => {
        return this.renderOrderItems(item, itemType, index);
      });
    });
  }

  render() {
    if (isEmpty(this.props.currentOrder.items)) {
      return <div />;
    }
    return <div>{this.renderList()}</div>;
  }
}

export default RenderGarments;
