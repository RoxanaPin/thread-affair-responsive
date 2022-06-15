import Head from 'next/head';

export default function Home() {
  return (
    <div  >
      <Head>
        <title>Thread affair</title>
      </Head>

      <header className="header">Hello world!
      <img src="/images/logo.jpg" alt=""></img>
      <i className="fa-solid fa-phone"></i>
      </header>

      <main className="content"></main>

      <footer className="footer"></footer>
    </div>
  );
}
