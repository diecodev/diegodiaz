import React from 'react';

type Props = {
  children: React.ReactNode
}
const PublicLayout = ({ children }: Props) => {
  return (
    <main className='prose min-h-screen min-w-full bg-gray-900'>{children}</main>
  );
};
export default PublicLayout;
