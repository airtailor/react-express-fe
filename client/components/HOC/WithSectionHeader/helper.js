export const getSectionHeaderText = props => {
  const {match: {path}} = props;
  if (path === '/admin/reports') {
    return 'Air Tailor / Reports';
  } else if (path === '/admin/reports/orders') {
    return 'Air Tailor / Order Reports';
  }
};
