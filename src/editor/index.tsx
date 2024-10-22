import { useEffect, useRef } from "react";
import { useCodeMirror } from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";
import { dracula } from "@uiw/codemirror-theme-dracula";

export default function CodeEditor({
  code,
  onValueChange,
}: {
  code: string;
  onValueChange: (value: string) => void;
}) {
  const editor = useRef<HTMLDivElement>(null);

  const { setContainer, view } = useCodeMirror({
    container: editor.current,
    extensions: [css()],
    theme: dracula,
    value: code,
    onChange: (value) => {
      onValueChange(value);
    },
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  useEffect(() => {
    if (view) {
      const currentCode = view.state.doc.toString();
      if (currentCode !== code) {
        view.dispatch({
          changes: { from: 0, to: currentCode.length, insert: code },
        });
      }
    }
  }, [code, view]);

  return (
    <div
      ref={editor}
      className="overflow-hidden font-['JetBrains Mono']"
      style={{ height: "100vh", border: "1px solid #ddd" }}
    />
  );
}
