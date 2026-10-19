import MarkdownToJSX from "markdown-to-jsx/react";

export default function Markdown({ children }: { children: string }) {
  return (
    <MarkdownToJSX
      className="font-light text-base space-y-2 [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_pre]:overflow-x-auto [&_code]:font-mono [&_blockquote]:border-l-2 [&_blockquote]:pl-3 [&_h3]:font-semibold [&_h4]:font-semibold"
      options={{ forceBlock: true, wrapper: "div", disableParsingRawHTML: true }}
    >
      {children}
    </MarkdownToJSX>
  );
}
