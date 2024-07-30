import CodeMirror, { EditorView, oneDark, ViewUpdate } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import React, { useRef, useState } from 'react';

type JavaScriptEditorProps = {
  mentions: {
    label: string,
    value: any,
  }[]
}

const custom = [
  {
    label: '@appKey',
    displayLabel: '应用key',
  },
  {
    label: '@appSecret',
    displayLabel: '应用密钥',
  },
];

const onChange = (value: string, viewUpdate: ViewUpdate) => {
  console.log('onChange:', value);
};


const JavaScriptEditor = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState('');


  const runCode = () => {
    const lines = value.split('\n');
    let i = 0;
    const next = () => {
      if (i < lines.length) {
        try {
          eval(lines[i]);
        } catch (error) {
          console.error(`Error at line ${i + 1}: ${error}`);
        }
        i++;
        setTimeout(next, 0);
      }
    };
    next();
  };

  return (
    <div>
      <CodeMirror
        height="300px"
        value={value}
        theme={oneDark}
        extensions={[
          javascript({ jsx: true }),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              setValue(update.state.doc.toString());
            }
          }),
        ]}
        ref={editorRef}
      />
      <button onClick={runCode}>Run Code</button>
    </div>
  );
};

export default JavaScriptEditor;