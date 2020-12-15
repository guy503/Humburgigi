import React from "react";

import EditorJs from "react-editor-js";
import styled from "styled-components";
import { EDITOR_JS_TOOLS } from "./tools";

const Container = styled.div``;

export default function Editor() {
  return (
    <Container>
      <h3>כאן ניתן לכתוב מאמר</h3>
      <span />
      <EditorJs tools={EDITOR_JS_TOOLS} />
    </Container>
  );
}
