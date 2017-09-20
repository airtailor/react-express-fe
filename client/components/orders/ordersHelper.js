export function redirectToStageOneIfNoAlterations(props) {
  const alterationsCount = props.cart.garments.reduce((prev, curr) => {
    return (prev += curr.alterations.length);
  }, 0);

  if (!alterationsCount > 0) {
    props.renderStageOne();
  }
}
