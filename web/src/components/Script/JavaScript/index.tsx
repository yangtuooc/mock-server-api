import CodeMirror, { EditorView, oneDark, ViewUpdate } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { mentions } from '@uiw/codemirror-extensions-mentions';

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
    value: '123456',
  },
  {
    label: '@appSecret',
    displayLabel: '应用密钥',
    value: 'abcdef',
  },
];

const onChange = (value: string, viewUpdate: ViewUpdate) => {
  console.log('onChange:', value);
};


const JavaScriptEditor = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState('');
  const [variables, setVariables] = useState(custom);

  const replaceVariables = (value: string) => {
    let result = value;
    variables.forEach((variable) => {
      result = result.replace(variable.label, variable.value);
    });
    return result;
  };

  const runCode = () => {
    const lines = value.split('\n');
    let i = 0;
    const next = () => {
      if (i < lines.length) {
        try {
          eval(replaceVariables(lines[i]));
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
          javascript({ jsx: true, typescript: true }),
          mentions(custom),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              setValue(update.state.doc.toString());
            }
          }),
        ]}
        ref={editorRef}
      />
      <Button onClick={runCode} type={'primary'} style={{ marginTop: '10px' }}>运行一下</Button>
    </div>
  );
};

export default JavaScriptEditor;