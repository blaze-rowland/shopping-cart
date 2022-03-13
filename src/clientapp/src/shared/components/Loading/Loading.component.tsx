import { Loader } from './Loading.style';

interface LoadingProps {
  sideNavOffset?: boolean;
}

export const Loading: React.FC<LoadingProps> = (props) => {
  const { sideNavOffset } = props;

  return <Loader sideNavOffset={sideNavOffset} />;
};
