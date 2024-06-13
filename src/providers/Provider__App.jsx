import Provider__Query from './Provider__Query';

const Provider__App = (props) => {
  const { children } = props;

  return <Provider__Query>{children}</Provider__Query>;
};

export default Provider__App;
