import ReactCodeMirror, { EditorView, oneDark } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { mentions } from '@uiw/codemirror-extensions-mentions';

export type JavaScriptEditorProps = {
  mentionOptions: {
    label: string,
    displayLabel: string,
    value: any,
  }[]
}


const JavaScriptEditor = ({ mentionOptions }: JavaScriptEditorProps) => {
  const editorRef = useRef(null);
  const [value, setValue] = useState('');

  const variables = mentionOptions;

  const replaceVariables = (value: string) => {
    let result = value;
    variables.forEach((variable) => {
      result = result.replace(variable.label, `'${variable.value}'`);
    });
    return result;
  };

  const runCode = () => {
    try {
      eval(replaceVariables(value));
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <div>
      <ReactCodeMirror
        height="300px"
        value={value}
        theme={oneDark}
        extensions={[
          javascript({ jsx: true, typescript: true }),
          mentions(mentionOptions),
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