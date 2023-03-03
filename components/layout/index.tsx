import type { NextPage } from 'next';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

type Props = {
  children: React.ReactNode,
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
