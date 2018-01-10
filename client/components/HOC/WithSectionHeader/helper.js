export const getSectionHeaderText = props => {
  const { match: { path } } = props;
  if (path === '/admin/reports') {
    return 'Air Tailor / Reports';
  } else if (path === '/admin/reports/orders') {
    return 'Air Tailor / Order Reports';
  } else if (path === '/stores/new') {
    return 'Stores / New';
  } else if (path === '/users/:user_id/edit') {
    return 'Edit User';
  } else if (path === '/orders/new') {
    return 'Agree To Terms';
  } else if (path === '/site/terms_of_service') {
    return '';
  }
};
