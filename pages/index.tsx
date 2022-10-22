import { GetStaticProps } from "next";
import { useState } from "react";
import axios from 'axios';
import { Button, Htag, Ptag, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>     
      <Htag tag='h1'>Greetings</Htag>
      <Button appearance="primary" arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">Button</Button>
      <Ptag size="large">Large</Ptag>
      <Ptag size="medium">Medium</Ptag>
      <Ptag size="small">Small</Ptag>
      <Tag size="small">Small</Tag>
      <Tag size="medium" color='red'>Red</Tag>
      <Tag size="medium" color='ghost'>Ghost</Tag>
      <Tag size="medium" color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}