import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { useCallback, useState } from 'react';

const initialCode = `
public HttpClient setup(HttpClient client,Context context){
  // custom handle  
}
`;

const JavaEditor = () => {

  const [code, setCode] = useState<string>(initialCode);
  const onChange = useCallback((val, viewUpdate) => {
    setCode(val);
  }, []);
  return (
    <CodeMirror theme={'dark'} value={code} height={'200px'} extensions={[java()]} onChange={onChange} />
  );
};

export default JavaEditor;