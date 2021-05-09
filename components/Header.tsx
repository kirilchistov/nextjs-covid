import Head from 'next/head';
import Link from 'next/link';

const Header = (props) => {
  return (
    <header className="text-center mt-0">
      <Head>
        <title>{props.title || 'Covid 19'}</title>
      </Head>
      <div className="bg-gray-800 shadow-md ">
        <h1 className="p-3 text-xl font-semibold text-gray-200">COVID 19</h1>
      </div>
    </header>
  );
};

export default Header;
