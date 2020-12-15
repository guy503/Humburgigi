import Editor from "../../editor/Editor";
import { Section } from "../../section/Section";
import { Card, PageInfo } from "../../section/cards/Cards";


const SendReview = () => {
  return (
    <Section isCol={true} color="blue">
      <PageInfo heading='כתיבת מאמר' info=' כאן רושמים את כל הדברים החמודים על העמוד' />
      <Card color="orange">
        <Editor />
      </Card>
    </Section>
  );
};

export default SendReview;
