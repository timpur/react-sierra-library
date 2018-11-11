import MDX from "@mdx-js/runtime";
import { withMDXComponents } from "@mdx-js/tag/dist/mdx-provider";
import React, { Component } from "react";
import jsx from "react-syntax-highlighter/dist//languages/prism/jsx";
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/prism-light";
import prism from "react-syntax-highlighter/dist/styles/prism/prism";
import Button from "sierra-library-react/components/Button";

const MDXComponents = withMDXComponents(MDX);
registerLanguage("jsx", jsx);

interface IProps {
  children: string;
  metaString: string;
  live: boolean;
}
interface IState {
  live: boolean;
  mdx: string;
}

class Code extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { live: props.live, mdx: props.children };
    this.toggleLive = this.toggleLive.bind(this);
    this.onEditor = this.onEditor.bind(this);
  }

  public toggleLive() {
    this.setState({ live: !this.state.live });
  }

  public onEditor(e) {
    const value = e.target.value;
    this.setState({ mdx: value });
  }

  public render() {
    const { live, mdx } = this.state;
    const editor = <textarea value={mdx} onChange={this.onEditor} />;
    const syntax = (
      <SyntaxHighlighter style={prism} language="jsx">
        {mdx}
      </SyntaxHighlighter>
    );

    return (
      <div className="code-example">
        <Button size="small" color="transparent" onClick={this.toggleLive}>
          {live ? "🔓" : "🔒"}
        </Button>
        <MDXComponents>{mdx}</MDXComponents>
        {live ? editor : syntax}
      </div>
    );
  }
}

export default Code;
