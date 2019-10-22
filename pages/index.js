import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../components/Layout";

const Main = props => (
  <Layout>
    <h1>Ben's Blog & TV Shows</h1>
    <ul>
      {props.shows.map(item => (
        <li key={item.id}>
          <Link href="/p/[id]" as={`/p/${item.id}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Main.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log("===========>>>>>>>>");
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Main;
