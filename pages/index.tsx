import { useEffect, useState } from "react";
import { Button, Htag, Ptag, Rating, Tag } from "../components";

export default function Home(): JSX.Element {
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
