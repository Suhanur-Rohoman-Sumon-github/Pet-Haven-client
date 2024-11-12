import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-5">{children}</div>;
};

export default Container;
