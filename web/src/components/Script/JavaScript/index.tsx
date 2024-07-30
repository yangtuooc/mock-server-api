import CodeMirror, { ViewUpdate } from '@uiw/react-codemirror';
import { mentions } from '@uiw/codemirror-extensions-mentions';
import { javascript } from '@codemirror/lang-javascript';

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
  return (
    <CodeMirror
      theme={'dark'}
      height="300px"
      extensions={[javascript({ jsx: true, typescript: true }), mentions(custom)]}
      onChange={onChange}
    />
  );
};

export default JavaScriptEditor;