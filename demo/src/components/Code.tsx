import MDX from "@mdx-js/runtime";
import { withMDXComponents } from "@mdx-js/tag/dist/mdx-provider";
import React, { Component, Fragment } from "react";
import Button from "react-sierra-library/components/Button";
import jsx from "react-syntax-highlighter/dist//languages/prism/jsx";
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/prism-light";
import prism from "react-syntax-highlighter/dist/styles/prism/prism";

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
  }

  public toggleLive = () => {
    this.setState({ live: !this.state.live });
  }

  public onEditor = (e) => {
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
        <RenderCode mdx={mdx} />
        {live ? editor : syntax}
      </div>
    );
  }
}

class RenderCode extends Component<{ mdx: string }, { error: Error }> {
  public static getDerivedStateFromError(error) {
    return { error };
  }

  public state = { error: null };

  public shouldComponentUpdate(nextProps) {
    if (nextProps.mdx !== this.props.mdx) {
      this.setState({ error: null });
    }
    return true;
  }

  public render() {
    const { mdx } = this.props;
    const { error } = this.state;
    return (
      <Fragment>
        {!error && <MDXComponents>{mdx}</MDXComponents>}
        {error && <p>Error: {error.message}</p>}
      </Fragment>
    );
  }
}

export default Code;
