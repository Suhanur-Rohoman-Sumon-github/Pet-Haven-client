import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-5 lg:px-12">{children}</div>;
};

export default Container;
