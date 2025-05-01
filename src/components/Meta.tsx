import Head from "next/head";

interface IMetaProps {
  title: string;
}

const Meta = ({ title }: IMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="stats, mini crossword stats, crossword stats"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: "Mini Crossword Stats",
};
