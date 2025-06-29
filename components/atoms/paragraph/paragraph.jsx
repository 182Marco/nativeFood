import { List } from "../list";
import { Subtitle } from "../subtitle";

const Paragraph = p => (
  <>
    <Subtitle text={p.text} />
    <List data={p.data} />
  </>
);

export { Paragraph };
