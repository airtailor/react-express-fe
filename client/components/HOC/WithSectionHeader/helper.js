export const getSectionHeaderText = props => {
  const { match: { path } } = props;
  switch (path) {
    case '/admin/reports':
      return 'Air Tailor / Reports';
      break;
    case '/admin/reports/orders':
      return 'Air Tailor / Order Reports';
      break;
    case '/stores/new':
      return 'Stores / New';
      break;
    case '/users/:user_id/edit':
      return 'Edit User';
      break;
    case '/orders/new':
      return 'Agree To Terms';
      break;
    case '/site/terms_of_service':
      return '';
      break;
    case '/customers/:customer_id/measurements':
      return 'Customer Measurements';
      break;
    default:
      return '';
      break;
  }
};
