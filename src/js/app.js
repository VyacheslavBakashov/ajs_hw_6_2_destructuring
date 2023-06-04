export default function extractSpicial({ special }) {
  return special.map(({ description = 'Описание недоступно', ...rest }) => ({ ...rest, description }));
}
