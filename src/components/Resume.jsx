import React from "react";
import {Container, Row} from "react-bootstrap"
import DocViewer, {DocViwerRenderers} from "@cyntler/react-doc-viewer"


export default function Resume () {
  const docs = [{uri: require("../../public/resume-portfolio.pdf")}]
  return (
    <Container>
      <Row>
        <DocViewer pluginRenderers={DocViwerRenderers} documents={docs} />
      </Row>
    </Container>
  )
}